import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <>
      <Navbar />
      {!quizStarted ? <Start onStart={() => setQuizStarted(true)} /> : <Quiz />}
    </>
  );
}

export default App;
