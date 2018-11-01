import React from 'react';
import { Link } from 'react-router-dom';


export default class TripList extends React.Component {
    constructor(props) {
        super(props)
        console.log("List", this.props.tripListToDisplay);
    }
    render() {
        const tripsData = this.props.tripListToDisplay
        // const tripsData = this.props.match.params.filter ? (this.props.tripListToDisplay).filter(trip=>trip.type === this.props.match.params.filter):this.props.tripListToDisplay
        return (
            <div className="trips-list">
                <h3>All Trips</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tripsData.map((trip, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{trip.date}</td>
                                        <td>{trip.place}</td>
                                        <td>{trip.type}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
