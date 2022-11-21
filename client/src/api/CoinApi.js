import axios from 'axios'

const baseUrl = '/api/'

export const buyCoin = async (data) => {
    const token = JSON.parse(localStorage.getItem('user')).token

    const response = await axios.post(baseUrl + 'transactions/buy', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.data.message === "Coin Purchased!") {
        const id = data.userID;
        const buyingPower = data.buyingPower - data.total
        const obj = {
            buyingPower
        }

        const updatedUser = await axios.put(baseUrl + `user/updateBuyingPower/${id}`, obj, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (updatedUser) {
            localStorage.setItem('user', JSON.stringify(updatedUser.data))
        }
        
        return [response.data, updatedUser.data]
    }

    return response.data;
}