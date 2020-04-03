import React, { Component } from 'react';
import axios from 'axios';

class TaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            list: props.list
        }
    }
    addTask = () => {
        const task = {title: this.state.title, list: this.state.list}

        if(task.title && task.title.length > 0){
            axios.post('/tasks/create', task)
                .then(res => {
                    if(res.data){
                        this.props.getLists();
                        this.setState({title: ""})
                    }
                })
                .catch(err => console.log(err))
        }else {
            console.log('input field required')
        }
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        let task = this.state;
        return (
            <div class="add-task-form">
                <input type="text" onChange={this.handleChange} value={task.title} />
                <button onClick={this.addTask}>+</button>
            </div>
        )
    }
}

export default TaskInput
