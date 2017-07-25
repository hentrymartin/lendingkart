import React from 'react';
import PropType from 'prop-types';
import './Input.scss';

const Input = (props) => {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onKeyPress={props.onKeyPress}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onChange={props.onChange} />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  name: 'input',
  value: '',
  placeholder: 'Please type here',
  onKeyPress: () => {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

Input.propTypes = {
  type: PropType.string,
  name: PropType.string,
  value: PropType.string,
  placeholder: PropType.string,
  onKeyPress: PropType.func,
  onChange: PropType.func,
  onFocus: PropType.func,
  onBlur: PropType.func,
};

export default Input;
