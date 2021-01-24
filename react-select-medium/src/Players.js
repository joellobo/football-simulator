import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class Players extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('http://localhost:3000/players')
    const data = res.data

    console.log(data)

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
    console.log(e)
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}/>
        <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
      </div>
    )
  }
}

