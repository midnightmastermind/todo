import React, { Component } from 'react';
import axios from 'axios';


class ListInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    addList = () => {
        const list = this.state;
        console.log(list)
        if(list.title && list.title.length > 0){
            axios.post('/lists/create', list)
                .then(res => {
                    if(res.data){
                        this.props.getLists();
                        this.setState({title: ""})
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log('input field required')
        }
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        let list = this.state;

        return (
            <div class="add-list-form">
                <input type="text" onChange={this.handleChange} value={list.title} />
                <button onClick={this.addList}>+</button>
            </div>
        )
    }
}

export default ListInput
