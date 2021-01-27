import styled from 'styled-components';

const QuizDiv = styled.div`
    width: 100%;
    border-radius: 4px;
    background-color: black;
    margin-top: 8px;
    padding: 9px 15px;
    display: inline-block;
    overflow: hidden;
`;

const QuizLink = styled.a`
    color: #fff;
    text-decoration: none;
    line-height: 16.8px;
`;

const QuizGalera = (props) => {

    let nomeQuiz = props.linkQuiz;
    nomeQuiz = nomeQuiz.replace("https://", "")
    nomeQuiz = nomeQuiz.replace(".vercel.app/", "")

    return (
        <QuizDiv>
            <QuizLink 
               href={props.linkQuiz}
               target="_blank"
               >{nomeQuiz}</QuizLink>
        </QuizDiv>
    );
}

export default QuizGalera;