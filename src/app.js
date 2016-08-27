import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import students from '../data/students';

export default ReactDOM.render(<App students={students} />, document.getElementById('app'));