import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }from './FirstApp'
import SecondApp from './SecondApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <SecondApp />
    </React.StrictMode>
)