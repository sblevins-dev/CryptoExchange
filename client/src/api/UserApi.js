import axios from 'axios'

const baseUrl = "/api/user/"

export const createUser = async (data) => {
    const res = await axios.post(baseUrl + "create", data)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data;
}

export const loginUser = async (data) => {
    const res = await axios.post(baseUrl + "login", data)
    const user = {
        email: res.data.email,
        name: res.data.name,
        token: res.data.token
    }

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    return res.data
}