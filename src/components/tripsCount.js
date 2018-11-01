import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

export default class TripCount extends React.Component {
    constructor(props) {
        super(props)
        console.log("props", this.props.tripList)
    }
    //It will return count of matching trip type....
    countDays(filterParam) {
        return this.props.tripList.filter(trip => filterParam ? trip.type === filterParam : trip).length
    }
    render() {
        return (
            <div className="trips-count">
                <div className="content">
                    <div className="total"><h1>{this.countDays()}</h1>trips</div>
                    <div className="tropic"><h3>{this.countDays('Trek')}</h3><i className="fas fa-sun" ></i></div>
                    <div className="trek"><h3>{this.countDays('Tropic')}</h3><i className="fas fa-mountain"></i></div>
                    <div className="club"><h3>{this.countDays('Club')}</h3><i className="fas fa-trophy "></i></div>
                </div>
            </div>
        )
    }
}