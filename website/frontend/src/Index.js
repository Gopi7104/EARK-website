import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import ReactGA from 'react-ga4';
import App from './App.js'
import Navigation from './components/Navigation.jsx';
ReactDOM.render(<Navigation/>,document.getElementById('root'));

ReactGA.initialize('G-0HLNW2W47S');

    ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    );  
