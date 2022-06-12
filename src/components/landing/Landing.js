import React from 'react';

import './Landing.css'

class Landing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: props.title.split('\\n').map(str => <h1>{str}</h1>),
            imgUrl: props.imgUrl
        }
    }


    render() {
        return (
            <div className='landing'>
                <div className='padded-centered-square'>
                    {this.state.title}
                </div>
                <div>
                    <img src={this.state.imgUrl}/>
                </div>
            </div>
        );
    }
}

export default Landing;