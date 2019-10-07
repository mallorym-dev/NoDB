import React, {Component} from 'react';
import axios from 'axios';

function ShowsMapped(props) {
    

   
    return (
        <div>
            <div>
                {props.showGoal}
            </div>
            <button onClick={e => props.moveShow(props.showGoal)}>Move To Seen</button>
            <button onClick={() => props.deleteShow(props.index)}>Delete</button>
        </div>
    )
}

export default ShowsMapped;
//update (ADD, DElete)shows i need to see