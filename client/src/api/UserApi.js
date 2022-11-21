import axios from 'axios'

const baseUrl = "/api/"

export const createUser = async (data) => {
    const res = await axios.post(baseUrl + "user/create", data)

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

export const getTransactions = async (user) => {
    const token = user.token

    const res = await axios.get(baseUrl + `transactions/${user.id}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return res.data
}

