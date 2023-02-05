import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide(){
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render (){
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span onClick={ () => {this.handleShowHide()} }>
                        {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                { this.state.isShowListUser === true && 
                    <div>
                        { listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        }) }
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo;