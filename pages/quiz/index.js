import React from 'react';

import db from '../../db.json';
import QuizPage from '../../src/screens/Quiz';

export default function QuizMain() {
  return <QuizPage questions={db.questions} theBg={db.bg} />;
}
