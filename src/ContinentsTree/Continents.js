import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Environment from './Environment';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com"
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_CONTINENTS = gql`
  {
    continents {
      code
      name
      __typename
      countries {
        code
        name
        __typename
        languages {
            code
            name
            __typename
        }
      }
    }
  }
`;

// create a component that renders a select input for coutries
function ContinentsSelect() {
  const { data, loading, error } = useQuery(LIST_CONTINENTS, { client });

  if (loading) {
    return <p className='error'>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <Environment data={data}/>    
  );
}

export default ContinentsSelect;