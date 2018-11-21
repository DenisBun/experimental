import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { withRouter } from 'react-router-dom';
// import { HeaderContainer } from 'app/header/components';

import styles from './AppContainer.module.scss';

export const mapStateToProps = app => ({
  loading: app.loading,
});

export class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.element,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    loading: false,
  };

  componentDidMount() {
    // this.props.fetchStringList();
  }

  render() {
    const { children, loading } = this.props;
    return !loading ? (
      <>
        <header>
          {/* <HeaderContainer /> */}
        </header>
        <div className={styles.app}>{children}</div>
      </>
    ) : null;
  }
}

export default compose(
  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md#blocked-updates
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(AppContainer);
