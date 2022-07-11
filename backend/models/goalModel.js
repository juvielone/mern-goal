const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'   //reference to user model object id(_id)
    },

    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Goal', goalSchema)