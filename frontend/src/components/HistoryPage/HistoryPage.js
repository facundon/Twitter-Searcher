import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTerms } from '../../actions/searchTerms'
import './styles.scss'


class HistoryPage extends Component {
    static propTypes = {
        searchTerms: PropTypes.array.isRequired,
        getTerms: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getTerms()
    }

    formatDate(raw_date) {
        const date = new Date(raw_date)
        return date.toLocaleDateString(undefined)
    }

    render() { 
        return ( 
            <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr className="d-flex">
                        <th className="col-7" scope="col">
                            Termino de Búsqueda
                        </th>
                        <th className="col-4" scope="col">
                            Fecha
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.searchTerms.map(item =>
                        <tr className="d-flex" key={item.id}>
                            <td className="col-7">
                                {item.search_term}
                            </td>
                            <td className="col-4" id="date">
                                {this.formatDate(item.search_date)}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        );
    }
}


const mapStatetToProps = state => ({
    searchTerms: state.searchTerms.searchTerms
})
export default connect(mapStatetToProps, {getTerms})(HistoryPage);