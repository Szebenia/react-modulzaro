import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import QuizApp from './QuizApp';
import QuizContextProvider from "./QuizContextProvider.jsx";
// import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizContextProvider>
    <QuizApp />
    </QuizContextProvider>
  </StrictMode>,
)
