import React, {Component} from 'react';
import axios from 'axios';
import ShowsToSee from './ShowsToSee';
import SeenMapped from './SeenMapped';

class ShowsSeen extends Component {
    constructor() {
        super()

        this.state = {
            shows: []
        }
    }

   

       
    render() {
        return (
            <div>
                {this.props.shows.map((el, i) => {
                    return (
                        <SeenMapped 
                        showSeen={el}
                        index = {i}
                        deleteAShow = {this.props.deleteAShow}
                        />
                    )
                })}
            </div>
        )
    }
}

export default ShowsSeen;