import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// const FormBase = styled.form`
//     width: 100%;
//     margin: 0 auto;
//     padding: 33px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

const InputBase = styled.input`
    width: 100%;
    /* height: 40px; */
    /* padding: 7px 15px; */
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    background: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    font: inherit;
    outline: 0;
    margin-bottom: 25px;

    &::placeholder { /* Chrome/Opera/Safari */
     color: ${({ theme }) => theme.colors.contrastText};
    }
`;

function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
