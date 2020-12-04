import React, { Component } from 'react';
import axios from 'axios'
import CSRFToken from './CSRFToken'
import Media from './Media'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addTerm } from '../../actions/searchTerms'


class SearchPage extends Component {
    state = {
        term: "",
        tweets: null
    }

    static propTypes = {
        addTerm: PropTypes.func.isRequired
    }

    addRecord(res) {
        this.setState({tweets: res.data})
        const { term } = this.state
        const data = {
            "search_term": term
        }
        this.props.addTerm(data)
    }

    handleSubmit() {
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.post('/search/', {
            search_term: this.state.term
        })
        .then(res => this.addRecord(res))
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    render() { 
        return (
            <>
            <form onSubmit={() => this.handleSubmit()}>
                <div className="input-group mb-3">
                    <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Que andas buscando?" />
                    <CSRFToken />
                    <button type="submit" className="btn btn-primary">Buscar!</button>
                </div>
            </form>
            {this.state.tweets ? <Media>{this.state.tweets}</Media> : null}
            </>
          );
    }
}
 
export default connect(null, {addTerm})(SearchPage);