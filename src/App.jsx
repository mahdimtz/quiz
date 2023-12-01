import {Quiz} from "./practice/Quiz"
import { jsQuizz } from "./practice/constants"
function App() {
  
  return (
   <Quiz questions={jsQuizz.questions}/>
  )
}

export default App
