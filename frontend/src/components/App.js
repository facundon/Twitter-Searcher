import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

import Header from './Header'
import HistorialPage from './HistorialPage'

class App extends Component {
    render() { 
        return(
            <Provider store={store}>
                <Header />
                <HistorialPage />
            </Provider>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));