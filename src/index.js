import React from 'react'
import ReactDOM from 'react-dom';

import providers from "./providers";
import App from './App'

const {CategoriesProvider} = providers;

ReactDOM.render(<CategoriesProvider><App/></CategoriesProvider>, document.querySelector('#root'));