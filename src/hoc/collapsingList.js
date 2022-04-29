import React, { Component } from 'react';


function collapsingList  (WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {show: false};
        }
        
        handleChange() {this.setState({show: !this.state.show});}

        render() {
            return <WrappedComponent onClick={this.handleChange} isShow={this.state.show} {...this.props} />
        }
    }
}

export default collapsingList;