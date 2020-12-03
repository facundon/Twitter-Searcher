import React, { Component } from 'react';


var Twitter = requiere('twitter')



class SearchPage extends Component {
    state = {  }

    componentDidMount(){
        
    }

    render() { 
        return (
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Que tweet estas buscando?" />
                <button type="button" class="btn btn-primary">Buscar!</button>
            </div>
          );
    }
}
 
export default Searc