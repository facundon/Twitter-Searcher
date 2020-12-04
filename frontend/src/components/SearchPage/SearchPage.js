import React, { Component } from 'react';
import axios from 'axios'
import CSRFToken from './CSRFToken'
import Media from './Media'
import SearchIcon from './SearchIcon'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addTerm } from '../../actions/searchTerms'
import './styles.scss'


class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: "",
            tweets: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(e) {
        e.preventDefault()
        const data = {
            search_term: this.state.term
        }
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.post('/search/', data)
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
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Que andas buscando?" />
                    <CSRFToken />
                    <button type="submit" className="btn btn-primary"><SearchIcon />Buscar!</button>
                </div>
            </form>
            {this.state.tweets ? <Media>{this.state.tweets}</Media> : null}
            </>
          );
    }
}
 
export default connect(null, {addTerm})(SearchPage);