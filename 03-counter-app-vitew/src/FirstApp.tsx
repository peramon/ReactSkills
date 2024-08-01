// export function App() {
//     return (<h1>Hello React, oops</h1>);
// }
// export default App;

import React from "react";

// import { Fragment } from "react/jsx-runtime"
// const newMessage = {
//     msj: 'hello world',
//     user: 'Paul'
// };

// function sendGreeting(greeting: string): string{
//     return greeting;
// }
// import PropTypes from 'prop-types';

interface AppProps {
    title?: string;
    subTitle?: string;
}

export const App: React.FC<AppProps> = ({ title = 'No title', subTitle='No subtitle'}) => {
    return (
        <>
            <h1>Hello Baby</h1>
            <h2> { title }</h2>
            <h3> { subTitle } </h3>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p> I'm a villian</p> 
            <hr />
        </>

    )
}

// App.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.string.isRequired
// }

// App.defaultProps = {
//     title: 'No title',
//     subTitle: 'No subtitle',
//     name: 'Paul Ramon'
// }

// export const App = () => <h1>Arrow Hello</h1>