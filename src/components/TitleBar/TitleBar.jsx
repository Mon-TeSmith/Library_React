import React from 'react';
import './TitleBar.css';

function TitleBar(props){
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titleBar-nav">
                    <h1>Library React</h1>    
                </div>
            </div>
        </div>
    )
}

export default TitleBar;