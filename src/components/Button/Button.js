import React from 'react';
import PropType from 'prop-types';
import classnames from 'classnames';
import './Button.scss';

const Button = (props) => {
  return (
    <button
      className={classnames('button', props.className)}
      onClick={props.onClick}
      type={props.type}>
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  value: 'Button',
  type: 'submit',
  className: '',
};

Button.propTypes = {
  onClick: PropType.func,
  value: PropType.string,
  className: PropType.string,
  type: PropType.string,
};

export default Button;
