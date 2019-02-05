import React from 'react';
import PublicEvent from './PublicEvent';

class PublicEventContainer extends React.Component {
    state = {
        required: {
            title: '',
            poster: null,
            tags: [],
        },
        optional: {
            location: '',
            startDate: '',
            endDate: '',
            description: '',
        },
        contacts: {
            phone: '',
            messenger: '',
            email: '',
            site: '',
            socialLinks: [],
        },
    };

    onSubmit = values => {
        console.log(this.state);
        console.log(JSON.stringify(values, undefined, 2));
    };

    onInputChange = (e, key) => {
        e.persist();
        console.log(e.target.value, key);
        this.setState({ ...this.state, [key]: e.target.value });
        console.log(this.state);
    };

    render() {
        return (
            <PublicEvent
                onSubmit={this.onSubmit}
                onInputChange={this.onInputChange}
                titleValue={this.state.required.title}
            />
        );
    }
}

export default PublicEventContainer;
