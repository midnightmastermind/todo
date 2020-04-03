const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ListSchema = new Schema({
    title: { type: String, required: [true, 'The todo text field is required']},
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
})

const List = mongoose.model('List', ListSchema);

module.exports = List;
