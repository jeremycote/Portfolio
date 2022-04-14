import React from 'react';
import PropTypes from 'prop-types';
import DownloadSource from '../../Utilities/Enums/DownloadSource';

import './Project.css'

class Project extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: props.title,
            imgUrl: props.imgUrl,
            description: props.description.split('\\n').map(str => <p>{str}</p>),
            //technologies: props.technologies.map((t) => <li key={t.name}>{t.name}</li>),
            downloadUrl: props.downloadUrl,
            downloadSource: props.downloadSource,
            dimensions: {}
        }

        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target:img}){
        this.setState({dimensions: {
            height: img.offsetHeight,
            width: img.offsetWidth
        }})
    }

    render() {
        var isLandscapeImg = false;

        if (this.state.dimensions != null && this.state.dimensions.width > this.state.dimensions.height) {
            isLandscapeImg = true;
        }


        const landscapeContent = <div className='project-cell'>
            <h1>{this.state.title}</h1>

            <img onLoad={this.onImgLoad} src={this.state.imgUrl}/>

            {this.state.description}
            
            <a href={this.state.downloadUrl}>
                <img src={this.state.downloadSource.url}></img>
            </a>
        </div>

        const protraitContent = <div className='project-cell portrait'>
            <h1 className='grid-col-span-2'>{this.state.title}</h1>

            <img onLoad={this.onImgLoad} src={this.state.imgUrl}/>

            <div>
                {this.state.description}
                <a href={this.state.downloadUrl}>
                    {this.state.downloadSource != null && <img src={this.state.downloadSource.url}></img>}
                </a>
            </div>
        </div>

        return (
            <div>
                {isLandscapeImg &&
                    landscapeContent
                }
                {!isLandscapeImg &&
                    protraitContent
                }
            </div>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    downloadUrl: PropTypes.string,
    downloadSource: PropTypes.instanceOf(DownloadSource)
}

export default Project;