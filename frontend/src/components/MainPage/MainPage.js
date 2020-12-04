import React from 'react'
import './styles.scss'
import graph from '../../imgs/graph.png'

const MainPage = () => {
    return (
        <div className="content-wrapper">
            <h1>Bienvenide a la webapp</h1>
            <h1>Buscadora de Tweets</h1>
            <br />
            <h2>Construida con Django y React</h2>
            <br />
            <br />
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>El formato del proyecto consta de 2 apps: <span className="special-word">frontend</span> y <span className="special-word">tweeter</span>(API)</h4>
            </div>
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>El frontend se renderiza mediante una única view de una app django</h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>Se utiliza <span className="special-word">redux</span> para hacer los request a la api</h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>Las views son renderizadas con <span className="special-word">react-router</span></h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>Las request al backend son realizadas mediante <span className="special-word">axios</span></h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>Se utilizó <span className="special-word">django rest-framework</span> para crear la api que maneja la base de datos</h4>
            </div>        
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>El endpoint de la API es <span className="special-word">/api/history/</span></h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>El término de búsqueda se envía mediante POST a <span className="special-word">/search/</span></h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>Se creo un componente <span className="special-word">CSRF Token</span> en el frontend para realizar el POST</h4>
            </div> 
            <div className="d-flex p-2 bd-highlight align-items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_11-64.png" />       
                <h4>La request a la api de Twitter se hace dentro de una vista utilizando <span className="special-word">tweepy</span></h4>
            </div> 
            <div className="d-flex p-2 bd-highlight justify-content-center">
                <img className="graph" src={graph} />
            </div>
        </div>
    )
}

export default MainPage
