import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({theme}) => theme.borderRadius};
    border: 0;

    width: 100%;
    padding: 10px 16px;
    font: inherit;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .3s;    

    &:hover,
    &:focus {
      opacity: .5;
      cursor: pointer;
    }

    &:disabled {
      background-color: gray;
      opacity: 1;
      cursor: auto;
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
