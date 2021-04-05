import React, { Component } from 'react';
import { connect } from 'react-redux';
import {listAdd} from "../action/action";

class scheduler extends Component {

    state = {
        clicked: false,
        newApp: "",
        newDate: ""
    };

    doClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    addList = () => {
        // e.preventDefault();
        // let newList = this.state.list;
        // newList.push([this.state.newApp, this.state.newDate]);
        // this.setState({list: newList})
        this.props.increment([this.state.newApp, this.state.newDate])
    }

    render() {
        return (
            this.show()
        );
    }

    show() {
        if (this.state.clicked === false) {
            return (<div className="App">
                <h1>Task Tracker</h1>
                <button onClick={() => this.doClick()}>Add</button>
                {this.showList()}
            </div>)
        } else {
            return (<div className="App">
                <h1>Add Task</h1>
                <div className="List">
                    <form onSubmit={(e) => this.addList(e)}>
                        <label for="newApp"> Enter Your Appointment: {this.state.newApp} </label>
                        <input id="newApp" type="text" value={this.state.newApp}
                               onChange={(e) => this.setState({newApp: e.target.value})}/>
                        <label for="newDate"> Enter the Date: {this.state.newDate} </label>
                        <input id="newDate" type="text" value={this.state.newDate}
                               onChange={(e) => this.setState({newDate: e.target.value})}/>
                        <button type="submit">Save</button>
                    </form>
                </div>
                <button onClick={() => this.doClick()}>Close</button>
                {this.showList()}
            </div>)
        }
    }

    showList() {
        if (this.state.clicked.length !== 0) {
            return (
                <div>
                    <ul>
                        {
                            (this.state.list.map(
                                    (li, index) => {
                                        return <li key={index}>Thing is {li[0]}, Date is {li[1]}</li>
                                    })
                            )
                        }
                    </ul>
                </div>
            )
        } else {
            return <p>No Task to Show</p>
        }
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (payload) => dispatch(listAdd(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(scheduler);
