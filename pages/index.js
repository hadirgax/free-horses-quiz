import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/Widget';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import QuizForm from '../src/components/QuizForm/QuizForm';
import QuizGalera from '../src/components/QuizGalera/QuizGalera';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos sobre Cavalos e divirta-se criando o seu AluraQuiz!</p>
          </Widget.Content>
          <QuizForm />
        </Widget>

        <Widget>
          <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React fez:</p>
              <QuizGalera linkQuiz='https://imersao-alura-peach.vercel.app/' />
              <QuizGalera linkQuiz='https://quiz-beatles.victorcorrea1.vercel.app/' />
              <QuizGalera linkQuiz='https://aluraquiz-show.noebezerra.vercel.app/' />
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com" />
    </QuizBackground>
  );
}
