
import React, { Component } from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import Input from './Input';
class List extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let list = this.props.list;
        return (
            <div className="list">
                <div className="header">
                    <div className="title"><Input title={list.title} /></div>
                    <AddButton list={list._id} component="tasks" getComponent={this.props.getLists}/>
                    <DeleteButton id={list._id} component="lists" getComponent={this.props.getLists} />
                </div>
                <div className={`tasks ${list.tasks.length > 3 ? "scrollbar" : ""} `}>
                    <ul>
                      {
                        list.tasks &&
                          list.tasks.length > 0 ?
                            (
                              list.tasks.map(task => {
                                return (
                                  <li key={task._id}><Input title={task.title} /><DeleteButton id={task._id} component="tasks" getComponent={this.props.getLists}/></li>
                                )
                              })
                            )
                            :
                            (
                              <div className="none">No Tasks Created</div>
                            )
                      }
                    </ul>
                </div>
            </div>
        )
    }
}

export default List;
