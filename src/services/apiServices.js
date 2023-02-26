import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    //Call API - Submit Data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/users', data);
}

const getAllUser = () => {
    return axios.get('api/users');
}

const putUpdateUser = (id, username, role, image) => {
    //Call API - Submit Data
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/users', data);
}

const deleteUser = (userId) => {
    return axios.delete('api/users', { data: {id: userId} });
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/users?page=${page}&per_page=${limit}`);
}

const postLogin = (email, password) => {
    return axios.post('api/login', 
    { 
        email, 
        password,
        delay: 5000 
    });
}

const postRegister = (email, password, username) => {
    return axios.post('api/register', { email, password, username });
}

export { 
    postCreateNewUser, 
    getAllUser, 
    putUpdateUser, 
    deleteUser, 
    getUserWithPaginate,
    postLogin,
    postRegister 
}