// import { useState } from 'react';
import item from '../../src/assets/projects';

function Project({ i }) {
    return (// props.project.map((item, i) => (
        <div className='container logo' key={i}>
            <div className='text-center'>
            <img className="img-thumbnail" src={item[i].img}></img>
            <div className='text-group'>
                <h3>{item[i].title}</h3>
                <div className='row'>
                    <a className='card-link col-6' href={item[i].deploy}>Application</a>
                    <a className='card-link col-6' href={item[i].github}>Github</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Project;