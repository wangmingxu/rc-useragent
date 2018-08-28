import React, { Component } from 'react';
import { instanceOf, func } from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';
import ClientDetect from './ClientDetect';

export default function withUserAgent(WrapperComponent) {
  class Wrapper extends Component {
    static displayName = `withUserAgent(${Component.displayName ||
      Component.name})`;
    static WrapperComponent = WrapperComponent;

    static propTypes = {
      wrappedComponentRef: func
    };

    static contextTypes = {
      userAgent: instanceOf(ClientDetect).isRequired
    };

    constructor(props) {
      super(props);
    }

    render() {
      const { wrappedComponentRef, ...remainingProps } = this.props;

      return (
        <WrapperComponent
          {...remainingProps}
          ua={this.context.userAgent}
          ref={wrappedComponentRef}
        />
      );
    }
  }

  return hoistStatics(Wrapper, WrapperComponent, { WrappedComponent: true });
}