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
    console.log(lists)
    return(
      <div>
        <h1>My Planner Application</h1>
        <ListInput getLists={this.getLists}/>
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
                  <li>No todo(s) left</li>
                )
          }
      </div>
    )
  }
}

export default Todo;
