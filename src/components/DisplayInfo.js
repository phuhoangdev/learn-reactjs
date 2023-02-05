import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';

// class DisplayInfo extends React.Component {

//     render (){
//         const { listUsers } = this.props;
//         return (
//             <div className="display-info-container">
//                 { true && 
//                     <>
//                         { listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr/>
//                                 </div>
//                             )
//                         }) }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHidListUser] = useState(true);

    const handleShowHidListUser = () => {
        setShowHidListUser(!isShowHideListUser);
    }

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHidListUser()}>
                    {isShowHideListUser === true ? 'Hide List Users' : 'Show List Users'}
                </span>
            </div>
            { isShowHideListUser && 
                <>
                    { listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                <hr/>
                            </div>
                        )
                    }) }
                </>
            }
        </div>
    )
}

export default DisplayInfo;