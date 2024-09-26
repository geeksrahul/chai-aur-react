import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactElement = React.createElement(
  "a",
  {href : "https://github.com/geeksrahul"},
  "GEEKSRAHUL"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement }
  </StrictMode>,
)
