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
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding-left: 15px;
    font: inherit;
    color: ${({ theme }) => theme.colors.contrastText};
`;

const QuizForm = () => {
    return (
        <StyledQuizForm>
            <Input type="text" placeholder="Diz ai seu nome para jogar :)" />
            <Button type="button" value="Jogar" />
        </StyledQuizForm>
    );
}

export default QuizForm;