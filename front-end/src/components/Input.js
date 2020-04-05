import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
          input: this.props.title
      }
  }

  onSubmit = () => {
    if(this.state.input && this.state.input > 0){
      axios.post('/api/todos', this.state.input)
        .then(res => {
          if(res.data){
            this.setState({input: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    let { input } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={input} />
      </div>
    )
  }
}

export default Input
