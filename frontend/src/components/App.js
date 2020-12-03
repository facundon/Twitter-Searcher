import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    render() { 
        return(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));