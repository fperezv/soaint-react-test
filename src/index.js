import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class FetchGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: ''
        };
    }

    async componentDidMount() {
        const response = await axios.get('https://api.github.com/users/workshopsjsmvd');
        this.setState({
            name: response.data.name,
            location: response.data.location
        })
    }

    render() {
        return [
            <h1 key="name">Nombre: {this.state.name}</h1>,
            <h2 key="location">Pa&iacute;s: {this.state.location}</h2>
        ];
    }
}

ReactDOM.render(
    <FetchGithub/>,
    document.getElementById('root')
);
