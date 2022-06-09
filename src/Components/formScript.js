import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    onSubmit = event => {
        const { value } = this.state;
        event.preventDefault();
        console.log(value);
    }
    render() {
        const { value } = this.state;
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={value} />
                </form>
            </>
        );
    }
}

export default Form;