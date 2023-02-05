import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         address: 'Nha Trang',
//         age: ''
//     };

//     handleOnChangeName(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault();
        
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()*100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render(){
//         const {name, age, address} = this.state;
//         return (
//             <div>
//                 My name is {name} and I'm from {address}
//                 <br/>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     Your name: 
//                     <input 
//                     value={name}
//                     type="text" 
//                     onChange={(event) => this.handleOnChangeName(event)}
//                     />
//                     Your age: 
//                     <input 
//                     value={age}
//                     type="text" 
//                     onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Nha Trang');
    const [age, setAge] = useState('');

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        props.handleAddNewUser({
            id: Math.floor((Math.random()*100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I'm from {address}
            <br/>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                Your name: 
                <input 
                value={name}
                type="text" 
                onChange={(event) => handleOnChangeName(event)}
                />
                Your age: 
                <input 
                value={age}
                type="text" 
                onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;