import React, { Component } from 'react';

function collapsingList  (WrappedComponent) {

    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {show: false};
        }

        handleChange(id) {
            this.setState({show: !this.state.show});
            console.log(this.props.listLength + ": ColaspList");
            console.log(this.props.item.__typename + ": ColaspList");
        }
        
        render() {
            return <WrappedComponent onClick={(id) => this.handleChange(id)} isShow={this.state.show} {...this.props} />
        }
    }
}

export default collapsingList;