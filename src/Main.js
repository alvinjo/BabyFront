import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {


  constructor(props){
    super(props);
    this.state={
      name: ""
    }
    this.submit = this.submit.bind(this);
  }


  submit(){
    var session = this;
    var name = document.getElementById("namein").value;
    var length = document.getElementById("lengthin").value;
    var url = 'http://localhost:8081/baby/addBaby/' + length

    axios.post(url, {"name":name}).then((response) =>{
      session.setState({
        name: response.data.name
      });
    });

  }

  render() {
    return (
      <div>
        <h1>Generate baby name</h1>
        <p>Name starts with:</p><input id="namein"/>
        <p>Length of name:</p><input id="lengthin"/>
        <button onClick={this.submit}>Generate</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Main;
