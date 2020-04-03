const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const TaskSchema = new Schema({
    title: { type: String, required: [true, 'The todo text field is required']},
    list: { type: mongoose.Schema.Types.ObjectId, ref: 'List'}
})

//create model
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
