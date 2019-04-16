import React, { Component } from 'react';
import './App.css';


//const message = "This is a constant";
//const count = 4;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    isEven = (val) => val % 2 === 0 ? "Even" : "Odd";

    //  Expresion to set Prop Values.
    getClassName = (val) => val % 2 === 0 ? "bg-primary text-white text-center p-2 m-1" : "bg-secondary text-white text-center p-2 m-1";

    // Expresion to Handle Events.
    handleClick = () => this.setState({count: this.state.count + 1 } );

    render = () =>  <div className="container-fluid p-4">
                        <div className="row bg-info text-white p-2">
                            <div className="col font-weight-bold">Value</div>
                            <div className="col-6 font-weight-bold">Even?</div>
                        </div>
                        <div className="row bg-light p-2 border">
                            <div className="col">{this.state.count}</div>
                            <div className="col-6">{this.isEven( this.state.count ) }</div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button className="btn btn-info m-2" onClick={this.handleClick}>Click me</button>
                            </div>
                        </div>
                    </div>


    render = () =>  <div className="col-md-6 offset-3">
                        <table className="table table-striped table-bordered table-sm">
                            <thead className="bg-info text-white">
                                <tr><th>Value</th><th>Even?</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ this.state.count}</td>
                                    <td>{ this.isEven( this.state.count ) } </td>
                                </tr>
                            </tbody>
                            <tfoot className="text-center">
                                <tr>
                                    <td colSpan="2">
                                        <button className="btn btn-info m-2" onClick={ this.handleClick }>
                                            Click me
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

    render = () =>  <div className="offset-3 col-md-6 m-2">
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input className="form-control"/>
                        </div>
                    </div>
}

export default App;
