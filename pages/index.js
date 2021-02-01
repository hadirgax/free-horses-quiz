import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget/Widget';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos sobre Cavalos e divirta-se criando o seu AluraQuiz!</p>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
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
                disabled={name.length === 0}
              >
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Dá uma olhada nesses quizes incriveis que o pessoal da Imersão React fez:</p>
            <ul>
                {db.external.map((linkExterno) => {
                  const [projectNAme, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');
                  // const hrefLink = !name.length === 0
                  //   ? `/quiz/${projectNAme}___${githubUser}`
                  //   : '';
                  return (
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectNAme}___${githubUser}`}
                      // data-link={`${!name.length === 0}`}
                    >
                      {`${githubUser}/${projectNAme}`}
                    </Widget.Topic>
                  );
                })}
              </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/hadirga/free-horses-quiz" />
    </QuizBackground>
  );
}
