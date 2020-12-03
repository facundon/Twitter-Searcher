import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTerms } from '../../actions/searchTerms'


class HistoryPage extends Component {
    static propTypes = {
        searchTerms: PropTypes.array.isRequired,
        getTerms: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getTerms()
    }

    render() { 
        return ( 
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Termino de Búsqueda
                        </th>
                        <th>
                            Fecha
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.searchTerms.map(item =>
                        <tr key={item.id}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.search_term}
                            </td>
                            <td>
                                {item.search_date}
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