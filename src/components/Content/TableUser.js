const TableUser = (props) => {

    const { listUsers } = props;

    return (
        <>
            <table className="table table-hover table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <th>{item.id}</th>
                                    <td>{item.first_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.last_name}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button onClick={() => props.handleClickBtnUpdate(item)} className="btn btn-warning mx-3">Update</button>
                                        <button onClick={() => props.handleClickBtnDelete(item)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listUsers && listUsers.length === 0 && 
                    <tr><td colSpan="4">Not found data</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser