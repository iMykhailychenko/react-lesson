import { Component } from 'react';
import { DeveloperItem } from './DeveloperItem';

import developersJson from '../../assets/developers.json';

export class DeveloperList extends Component {
    state = {
        developers: developersJson,
    };

    handleDelete = id => {
        this.setState(prevState => {
            const newDevelopersList = prevState.developers.filter(item => item.id !== id);

            return { developers: newDevelopersList };
        });
    };

    render() {
        const { developers } = this.state;

        return (
            <>
                {developers.map(dev => (
                    <DeveloperItem key={dev.id} dev={dev} onDelete={this.handleDelete} />
                ))}
            </>
        );
    }
}
