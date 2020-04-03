import React, {Component} from 'react';
import axios from 'axios';

import ListInput from './ListInput';
import List from './List';

class Todo extends Component {
    constructor(props) {
            super(props);

            this.state = {
                    lists:[]
            }
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
                <div class="top-header">
                        <div class="title">My Planner Application</div>
                        <ListInput getLists={this.getLists}/>
                </div>
                <div class="lists">
                    {
                        lists &&
                            lists.length > 0 ?
                                (
                                    lists.map(list => {
                                        console.log(list)
                                        return (
                                            <List key={list._id} list={list} getLists={this.getLists}/>
                                        )
                                    })
                                )
                                :
                                (
                                    <li>No Lists Created</li>
                                )
                    }
                </div>
            </div>
        )
    }
}

export default Todo;
