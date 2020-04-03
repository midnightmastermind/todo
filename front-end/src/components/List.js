
import React, { Component } from 'react';
import TaskInput from './TaskInput';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.list;

        return (
            <div class="list">
                <div class="header">
                    <div class="title">{list.title}</div>
                    <TaskInput list={list._id} getLists={this.props.getLists}/>
                </div>
                <div class="tasks">
                    <ul>
                      {
                        list.tasks &&
                          list.tasks.length > 0 ?
                            (
                              list.tasks.map(task => {
                                return (
                                  <li key={task._id}>{task.title}</li>
                                )
                              })
                            )
                            :
                            (
                              <li>No Tasks Created</li>
                            )
                      }
                    </ul>
                </div>
            </div>
        )
    }
}

export default List;
