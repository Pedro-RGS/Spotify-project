import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  /* 
    O strictMode renderiza o componente dentro dele duas vezes.
    Isso é uma forma de teste de robustez do seu código.
  */
  <StrictMode>
    <App/>
  </StrictMode>
)
