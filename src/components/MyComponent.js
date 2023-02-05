import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
    
    state = {
        listUsers: [
            {id: 1, name: "Phu", age: "18"},
            {id: 2, name: "Phu Hoang", age: "27"},
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //JSX
    render(){
        return (

            <div>
                <AddUserInfo 
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br/>
                <DisplayInfo 
                    listUsers={this.state.listUsers} 
                />
            </div>

        );
    }
}

export default MyComponent;