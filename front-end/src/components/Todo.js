import React, {Component} from 'react';
import axios from 'axios';

import AddButton from './AddButton';
import List from './List';

class Todo extends Component {
    constructor(props) {
            super(props);

            this.state = {
                    lists:[]
            };
    }

    componentDidMount(){
        this.getLists();
    }

    getLists = () => {
        axios.get('/lists')
            .then(res => {
                if(res.data){
                    this.setState({
                        lists: res.data
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        let { lists } = this.state;

        return(
            <div>
                <div className="top-header">
                        <div className="title">My Planner Application</div>
                        <AddButton getComponent={this.getLists} component="lists"/>
                </div>
                <div className="lists">
                    {
                        lists &&
                            lists.length > 0 ?
                                (
                                    lists.map(list => {
                                        return (
                                            <List key={list._id} list={list} getLists={this.getLists}/>
                                        )
                                    })
                                )
                                :
                                (
                                    <div className="none">No Lists Created</div>
                                )
                    }
                </div>
            </div>
        )
    }
}

export default Todo;
