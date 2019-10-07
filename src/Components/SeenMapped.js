import React, {Component} from 'react';
import axios from 'axios';
import ShowsToSee from './ShowsToSee';

function SeenMapped(props) {
    console.log(props.index)
    return (
        <div>
            <div>
                {props.showSeen}
            </div>
            <button onClick={() => props.deleteAShow(props.index)}>Delete</button>
        </div>
    )
}

export default SeenMapped;


//maps over, adds shows i HAVE SEEN
