import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget/Widget';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import QuizGalera from '../src/components/QuizGalera/QuizGalera';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

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
            <form onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            router.push(`/quiz?name=${name}`);
          }}>
            <Input
              type="text"
              name="nomeDoUsuario"
              value={name}
              onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
              placeholder="Diz ai seu nome para jogar :)"
            />
            <Button
              type="submit"
              // value={`Jogar ${name}`}
              disabled={name.length === 0}>
              {`Jogar ${name}`}
            </Button>
          </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React fez:</p>
            <QuizGalera linkQuiz="https://imersao-alura-peach.vercel.app/" />
            <QuizGalera linkQuiz="https://quiz-beatles.victorcorrea1.vercel.app/" />
            <QuizGalera linkQuiz="https://aluraquiz-show.noebezerra.vercel.app/" />
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/hadirga/free-horses-quiz" />
    </QuizBackground>
  );
}
