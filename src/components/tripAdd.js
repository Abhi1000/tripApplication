import React from 'react';

export default class TripAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            place: "",
            type: ""
        }
    }
    submitForm = (event) => {
        event.preventDefault()
        const newTripData = {
            date: this.state.date,
            place: this.state.place,
            type: this.state.type
        }
        //Passing new trip to App component.....
        this.props.newTripData(newTripData)
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.submitForm} className="form black-container">
                    <label>
                        <h3>Add a trip</h3>
                        <br />
                        <br />
                        <br />
                    </label>
                    <label>
                        Date: <br />
                        <input
                            id="date"
                            type="date"
                            required
                            onChange={(e) => {
                                this.setState({ date: e.target.value })
                            }}
                        />
                    </label>
                    <label>
                        Place: <br />
                        <input
                            id="date"
                            type="text"
                            required
                            onChange={(e) => {
                                this.setState({ place: e.target.value })
                            }}
                        />
                    </label>
                    <label>
                        Type: <br />
                        <select 
                            onChange={(e) => {
                                this.setState({ type: e.target.value })
                            }}>
                            <option style={{color:'black'}} value="null">Select your trip type</option>                            
                            <option style={{color:'black'}} value="Trek">Trek</option>
                            <option style={{color:'black'}} value="Tropic">Tropic</option>
                            <option style={{color:'black'}} value="Club">Club</option>
                        </select>
                    </label>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        )
    }
}