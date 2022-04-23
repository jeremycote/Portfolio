import React from 'react';

import './Skill.css'

class Skill extends React.Component {
    constructor(props){
        super();

        this.state = {
            title: props.title,
            elements: props.elements.map(element => <li>{element}</li>),
        }
    }

    render() {
        return(
            <div className='skill-cell'>
                <h1>{this.state.title}</h1>
                <ul>
                    {this.state.elements}
                </ul>
            </div>
        )
    }
}

export default Skill