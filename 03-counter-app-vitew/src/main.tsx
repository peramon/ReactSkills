import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }from './FirstApp'
import SecondApp from './SecondApp'
import { CounterApp }from './CounterApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <SecondApp />
        <CounterApp value={123} />
    </React.StrictMode>
)