import axios from 'axios'

const baseUrl = "/api/coins/"

const Coins = {
    getCoins: async () => {
    const res = await axios.get(baseUrl, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!res) {
        console.log('error')
    } else {
        return res.data;
    }
}
}

export default Coins