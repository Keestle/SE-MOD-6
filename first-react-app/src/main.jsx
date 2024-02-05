import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorMessage from './ErrorMessage.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
)
