import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'; // imports App.js, which is our main Component
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // everything renders to this element
registerServiceWorker();
