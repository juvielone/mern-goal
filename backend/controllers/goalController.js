
// @desc middleware handling exceptions inside of async 
// express routes and passing them to our express error handlers
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get Goals
// @route   GET api/goals
// @acess   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)

})


// @desc    Set Goals
// @route   POST api/goals
// @acess   Private
const setGoals = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')

    }

    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(200).json(goal)


})

// @desc    Update Goals
// @route   PUT api/goals
// @acess   Private
const updateGoals = asyncHandler(async (req, res) => {

    const goalId = await Goal.findById(req.params.id);

    if (!goalId) {
        res.status(400);
        throw new Error('Goal not found');
    }

    // Creates a new field if it doesn't exists
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, { new: true })

    res.status(200).json(updatedGoal)

})


// @desc    Delete Goals
// @route   DELETE api/goals
// @acess   Private
const deleteGoals = asyncHandler(async (req, res) => {


    const goalId = await Goal.findById(req.params.id);

    if (!goalId) {
        res.status(400);
        throw new Error('Goal not found');
    }

    await goalId.remove()

    res.status(200).json({ id: req.params.id })


})




module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}