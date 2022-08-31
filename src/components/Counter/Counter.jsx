import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class Counter extends Component {
    state = {
        value: 0,
        isModalOpen: false,
    };

    reset = () => {
        this.setState({ value: 0 });
    };

    minus = () => {
        this.setState(prevState => {
            return { value: prevState.value - 1 };
        });
    };

    plus = () => {
        this.setState(prevState => {
            return { value: prevState.value + 1 };
        });
    };

    handleOpenModal = () => {
        this.setState({ isModalOpen: true });
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { value, isModalOpen } = this.state;

        // true && 'modal' -> 'modal'
        // false && 'modal' -> false
        return (
            <>
                <p>{value}</p>

                {isModalOpen && <Modal onClose={this.handleCloseModal} />}

                <button type="button" className="btn btn-secondary" onClick={this.handleOpenModal}>
                    Open modal
                </button>

                <button type="button" className="btn btn-primary" onClick={this.reset}>
                    reset
                </button>

                <button type="button" className="btn btn-primary" onClick={this.minus}>
                    -1
                </button>

                <button type="button" className="btn btn-primary" onClick={this.plus}>
                    +1
                </button>
            </>
        );
    }
}
