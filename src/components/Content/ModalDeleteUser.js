import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const {show, setShow, dataDelete} = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async() => {
        let data = await deleteUser(dataDelete.id);
        
        if(data && data.id != null){
            toast.success("Delete Success");
            handleClose();
            //await props.fetchListUsers();
            props.setCurrentPage(1);
            await props.fetchListUsersWithPaginate(1);
        }else{
            toast.error("Delete Error")
        }
    }

    return (
        <>
            <Modal 
                show={show} 
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Confirm Delete User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user:  
                    <b> {dataDelete && dataDelete.email ? dataDelete.email : ""}</b>!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => {handleSubmitDeleteUser()}}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;