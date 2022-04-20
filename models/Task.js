const { Schema, model } = require('./connection')

const taskSchema = Schema({
    entry: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String,
        default: 'TO-DO',
        enum: ['TO-DO', 'COMPLETED']
    }
},
{
    timestamps: true
}
);

module.exports = model('Task', taskSchema);