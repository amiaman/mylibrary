import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { simpleAction } from './actions/simpleAction'
import './App.css';

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    }
    render() {
        return (
            <div className="App">
                <pre>
                    { JSON.stringify(this.props) }
                </pre>
                <button onClick={this.simpleAction}>Test redux action</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
