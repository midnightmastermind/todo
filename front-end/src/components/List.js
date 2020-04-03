
import React, { Component } from 'react';
import TaskInput from './TaskInput';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.list;
        console.log(list)
        return (
            <div>
                <h2>{list.title}</h2>
                <TaskInput list={list._id} getLists={this.props.getLists}/>
                <ul>
                  {
                    list.tasks &&
                      list.tasks > 0 ?
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
        )
    }
}

export default List;
