import React from "react"
import questions from "./questions"
import { BatteryContext } from "./contexts"
import { Route } from "react-router-dom"
import Start from "./components/start"
import Question from "./components/question"
import Results from "./components/results"


function App() {
  const [questionSet, setAnswers] = React.useState(questions)
  return (
    <BatteryContext.Provider value={{ questionSet, setAnswers }}>
      <Route path={`/`} exact component={Start} />
      <Route path={`/question/:id`} exact component={Question} />
      <Route path={`/results`} exact component={Results} />
    </BatteryContext.Provider>
  )
}

export default App
