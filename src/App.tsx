import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_STATE = {
  initialInvestment: 12000,
  annualInvestment: 1000,
  expectedReturn: 8.5,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_STATE);
  function changeHandler(type: any, value: any) {
    setUserInput((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  }

  const validInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={changeHandler} />
      {!validInput && <p className="center">Enter valid input.</p>}
      {validInput && <Results input={userInput} />}
    </>
  );
}

export default App;
