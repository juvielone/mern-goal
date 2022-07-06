
// @desc middleware handling exceptions inside of async 
// express routes and passing them to our express error handlers
const asyncHandler = require('express-async-handler')



// @desc    Get Goals
// @route   GET api/goals
// @acess   Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})


// @desc    Set Goals
// @route   POST api/goals
// @acess   Private
const setGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')

    }


})

// @desc    Update Goals
// @route   PUT api/goals
// @acess   Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id}` })

})


// @desc    Delete Goals
// @route   DELETE api/goals
// @acess   Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}` })

})




module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}