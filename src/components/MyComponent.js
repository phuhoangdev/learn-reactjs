import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Phu',
        address: 'Nha Trang',
        age: 26
    };

    handleClick(event) {
        console.log("My name is", this.state.name)

        this.setState({
            name: 'Phu Hoang'
        })
    }

    //JSX
    render(){
        return (

            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={(event) => { this.handleClick(event) }}>Click me!</button>
            </div>

        );
    }
}

export default MyComponent;