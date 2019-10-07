import React, {Component} from 'react';
import axios from 'axios';
import ShowsMapped from './ShowsMapped';


class ShowsToSee extends Component {
    constructor() {
        super()

        this.state = {
            shows: [],
            input: '',

        }
    }

    

    

   
    render() {
        console.log(this.props)
        let showGoals = this.props.showGoals.map((el, i) => {
            return (
                <ShowsMapped 
                    moveShow = {this.props.moveShow}
                    showGoal={el}
                    addShow={this.props.addShow} 
                    deleteShow={this.props.deleteShow}
                    index={i} />
            )
        })
        return (
            <div>
                {showGoals}
            </div>
        )
    }
}

export default ShowsToSee;