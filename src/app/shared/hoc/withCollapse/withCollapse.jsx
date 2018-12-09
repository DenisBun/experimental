import React from 'react';
import { Collapse } from 'react-collapse';
import PropTypes from 'prop-types';

const withCollapse = (WrappedComponent, selectData) => {
    return class extends React.Component {
        state = {
            isOpened: false,
        };
        componentDidMount = () => {};

        componentWillUnmount = () => {};

        handleOpen = () => {
            this.setState({
                isOpened: true,
            });
        };

        render() {
            const { isOpened } = this.state;
            return (
                <Collapse isOpened={isOpened}>
                    <WrappedComponent data={this.state.data} {...this.props} />
                </Collapse>
            );
        }
    };
};

withCollapse.propTypes = {};

export default withCollapse;
