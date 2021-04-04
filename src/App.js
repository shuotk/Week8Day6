import './App.css';
import React, {Component} from "react";


export default class App extends Component {
    state = {
        clicked: false,
        list: [["App1", "Date1"], ["App2", "Date2"]],
        newApp: "",
        newDate: ""
    };

    doClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    appHandler = (e) => {
        this.setState({newApp: e.target.value})
    }

    dateHandler = (e) => {
        this.setState({newDate: e.target.value})
    }

    addList = (e) => {
        e.preventDefault();
        let newList = this.state.list;
        newList.push([this.state.newApp, this.state.newDate]);
        this.setState({list: newList})
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
                        <input id="newApp" type="text" onChange={(e) => this.appHandler(e)}/>
                        <label for="newDate"> Enter the Date: {this.state.newDate} </label>
                        <input id="newDate" type="text" onChange={(e) => this.dateHandler(e)}/>
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

    render() {
        return (
            this.show()
        );
    }

}
