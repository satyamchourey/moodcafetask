import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
// import { createStore } from 'redux'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Name: "",
      email: "",
      phone: "",
      hobby:{
        cricket:false,
        football:false,
        dance:false
      },
      id: 0,
      entryList: []
    };
  }

  grabValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      Name: "",
      email: "",
      phone: "",
      hobby:
      {
        cricket: false,
        football: false,
        dance: false
      }
    });


  };

  handleCheck=(e)=>{
    let keys = Object.keys(this.state.hobby);
    let currentKey = keys.filter(el => el === e.target.name);

    this.setState({
      ...this.state,
      hobby: {
        ...this.state.hobby,
        [currentKey]: !this.state.hobby[currentKey]
      }
    });


    
  }

  updateEntry = fields => {
    fields.preventDefault();
    this.setState({
      id: this.state.id + 1
    });

    let currentEntry = {
      Name: this.state.Name,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id,
      hobby:this.state.hobby
    };

    this.setState({
      entryList: [...this.state.entryList, currentEntry]
    });
    this.resetForm();
  };

  deleteEntry = (id) => {
    var deletingEntry = [...this.state.entryList];

    deletingEntry = deletingEntry.filter(function(ele) {
      return ele.id !== id;
    });

    console.log(deletingEntry);
    this.setState({
      entryList: deletingEntry
    });
  };
  

  render() {
    
    return (
      <div className="App">
        {/* {console.log(Object.keys(this.state.hobby)[0])} */}
        {console.log(this.state.hobby)}
        <h1>MoodCafe Task</h1>
        <div className="container-fluid">
          <div className="row " style={{ height: "500px" }}>
            {/* Form Component */}
            <div className="col bg-dark text-light mt-5">
              <Form
                {...this.state}
                grabValue={this.grabValue}
                handleCheck={this.handleCheck}
                updateEntry={this.updateEntry}
              />
            </div>

            {/*  display, which has a list of entries submitted by the left form with update option */}
            <div className="col bg-light text-dark mt-5">
              <div>
                <span className="display-4">Entries</span>
              </div>
              <div id="entryDiv">
                {this.state.entryList.map((item, index) => {
                  return (
                    <div className='row bg-info mb-2 text-white' key={item.id}>
                      <div className='col-sm-10'>
                      <div>Name: {item.Name}</div>
                      <div>Email: {item.email}</div>
                      <div>Phone: {item.phone}</div>
                      <div>Hobbies: 
                        {item.hobby.cricket ? <span> {Object.keys(item.hobby)[0]} ; </span>:null}
                         {item.hobby.football ? <span> {Object.keys(item.hobby)[1]} ; </span>:null}
                         {item.hobby.dance ? <span> {Object.keys(item.hobby)[2]} ; </span>:null}
                         </div>                   


                      {console.log(item.hobby)}
                      </div>
                      <button className="btn-light col-sm-2" onClick={() => this.deleteEntry(item.id)}>
                        Delete entry
                      </button>  
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
