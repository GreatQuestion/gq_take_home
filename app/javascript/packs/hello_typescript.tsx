import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

interface HelloProps {
  name: string
}
export const Hello = (props: HelloProps): React.ReactElement => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: 'David'
};

Hello.propTypes = {
  name: PropTypes.string
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello name="React Typescript" />, document.body.appendChild(document.createElement('div')));
});