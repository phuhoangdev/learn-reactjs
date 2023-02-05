import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
    
//     state = {
//         listUsers: [
//             {id: 1, name: "Phu", age: "18"},
//             {id: 2, name: "Phu Hoang", age: "27"},
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //JSX
//     render(){
//         return (
//             <>
//             <div>
//                 <AddUserInfo 
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br/>
//                 <DisplayInfo 
//                     listUsers={this.state.listUsers} 
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//             </>
//         );
//     }
// }

const MyComponent = () => {
    const [listUsers, setListUser] = useState(
        [
            {id: 1, name: "Phu", age: "18"},
            {id: 2, name: "Phu Hoang", age: "27"},
        ]
    );

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUser(listUsersClone)
    }

    return (
        <>
        <div>
            <AddUserInfo 
                handleAddNewUser={handleAddNewUser}
            />
            <br/>
            <DisplayInfo 
                listUsers={listUsers} 
                handleDeleteUser={handleDeleteUser}
            />
        </div>
        </>
    );
}

export default MyComponent;