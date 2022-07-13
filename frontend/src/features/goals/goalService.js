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


// Get goal
const getGoal = async (token) => {

    // Sets token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data

}

// Delete Goal
const deleteGoal = async (goalId, token) => {

    // Sets token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}


const goalService = {
    createGoal, getGoal, deleteGoal
}

export default goalService;