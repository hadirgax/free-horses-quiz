import React from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import Widget from '../src/components/Widget/Widget';
import Footer from '../src/components/Footer/Footer';
import QuizGalera from '../src/components/QuizGalera/QuizGalera';

import db from '../db.json';
import { QuizContainer } from './index';

export default function QuizPage() {
  const router = useRouter();
  const nomeJogador = router.query.name;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Seja bem-vindo 👉🏾
              <span style={{color: 'yellow', fontSize: '20px'}}>{nomeJogador}</span>
              !
            </p>
            <p>Aqui vai a pergunta!</p>
            <p>a) Aqui vai a opção!</p>
            <p>b) Aqui vai a opção!</p>
            <p>c) Aqui vai a opção!</p>
            <p>d) Aqui vai a opção!</p>
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
