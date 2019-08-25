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
      phone: ""
      // hobby:
      // {
      //   cricket: false,
      //   football: false,
      //   dance: false
      // }
    });
  };

  updateEntry = fields => {
    fields.preventDefault();
    this.setState({
      id: this.state.id + 1
    });

    let currentEntry = {
      Name: this.state.Name,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
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
        <h1>MoodCafe Task</h1>
        <div className="container-fluid">
          <div className="row " style={{ height: "500px" }}>
            {/* Form Component */}
            <div className="col bg-dark text-light mt-5">
              <Form
                {...this.state}
                grabValue={this.grabValue}
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
                    <div key={item.id}>
                      <div>Name: {item.Name}</div>
                      <div>
                        <span>Email: {item.email}</span>
                        <span>Phone: {item.phone}</span>
                      </div>

                      <button className="btn-info" onClick={() => this.deleteEntry(item.id)}>
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
