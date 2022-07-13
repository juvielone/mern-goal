import axios from 'axios'

const API_URL = '/api/goals/'

// Create goal
const createGoal = async (goalData, token) => {

    // Sets token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goalData, config)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}


const goalService = {
    createGoal
}

export default goalService;