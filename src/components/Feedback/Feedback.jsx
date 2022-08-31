import { Component } from 'react';

export class Feedback extends Component {
    state = {
        good: 0,
        bed: 0,
    };

    handleUpdate = event => {
        const { name } = event.target;

        this.setState(prevState => {
            return { [name]: prevState[name] + 1 }; // -> { good: prevState.good + 1 }
        });
    };

    render() {
        const { good, bed } = this.state;
        return (
            <>
                <p>good: {good}</p>
                <p>bed: {bed}</p>

                <button type="button" name="good" className="btn btn-link card-link" onClick={this.handleUpdate}>
                    Good
                </button>

                <button type="button" name="bed" className="btn btn-link card-link" onClick={this.handleUpdate}>
                    Bed
                </button>
            </>
        );
    }
}
