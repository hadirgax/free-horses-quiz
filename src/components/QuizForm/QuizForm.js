import React from 'react';
import { useRouter } from "next/router";

import styled from 'styled-components';

const StyledQuizForm = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 3.5px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 7px 15px;
    font: inherit;
    color: ${({ theme }) => theme.colors.contrastText};

    &::placeholder { /* Chrome/Opera/Safari */
     color: ${({ theme }) => theme.colors.contrastText};
    }
`;

const Button = styled.input`
    width: 100%;
    height: 36px;
    border-radius: 4px;
    margin-top: 25px;
    margin-bottom: 32px;
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    font: inherit;
    color: ${({ theme }) => theme.colors.contrastText};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &:disabled {
      background-color: gray;
      border: none;
    }
`;

const QuizForm = () => {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <StyledQuizForm onSubmit={(infosDoEvento) => {
      infosDoEvento.preventDefault();
      router.push(`/quiz?name=${name}`)
    }}>
      <Input
        type="text"
        onChange={(infosDoEvento) => {
          // name = infosDoEvento.target.value;
          setName(infosDoEvento.target.value);
        }}
        placeholder="Diz ai seu nome para jogar :)" />
      <Button 
        type="submit"
        value={`Jogar ${name}`} 
        disabled={name.length === 0} />
    </StyledQuizForm>
  );
}

export default QuizForm;
