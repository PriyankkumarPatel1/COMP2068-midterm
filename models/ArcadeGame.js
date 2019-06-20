const mongoose = require('mongoose');

// our schema
const ArcadeGameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        enum: ['fighting', 'sports', 'strategy', 'puzzle', 'arcade', 'platformer', 'other'],
        default: 'fighting'
    }
},
{
    timestamp: true
});

module.exports = mongoose.model('ArcadeGame', ArcadeGameSchema);