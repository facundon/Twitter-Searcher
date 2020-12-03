import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import Header from './Header'
import HistoryPage from './HistoryPage'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class App extends Component {
    render() { 
        return(
            <Provider store={store}>
                <Router>
                    <Header />
                    <div className="container">
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/historial" component={HistoryPage} />
                        <Route exact path="/buscador" component={SearchPage} />
                    </Switch>   </div>
                </Router>
            </Provider>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));