import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizPage from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({dbExterno}) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizPage 
        questions={dbExterno.questions}
        theBg={dbExterno.bg}
      />
    </ThemeProvider>
    // {/* <pre style={{color: 'black'}}>
    //   {JSON.stringify(dbExterno.questions, null, 4)}
    // </pre> */}
  );
}

export async function getServerSideProps(context) {
  const [projectNAme, githubUser] = context.query.id.split('___');
  
  try {
    const dbExterno = await fetch(`https://${projectNAme}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    // .catch((err) => console.error(err));

    // Server's console 
    // console.log('dbExterno', dbExterno);
    // console.log('Infos que o Next da para nós', context.query.id);

    return {
      props: {
        dbExterno,
      }, // will be passed to the page component as props
    }
  } catch(err) {
    throw new Error(err);
  }
}