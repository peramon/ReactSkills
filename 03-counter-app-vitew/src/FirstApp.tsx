// export function App() {
//     return (<h1>Hello React, oops</h1>);
// }
// export default App;

// import { Fragment } from "react/jsx-runtime"
// const newMessage = {
//     msj: 'hello world',
//     user: 'Paul'
// };

// function sendGreeting(greeting: string): string{
//     return greeting;
// }
import PropTypes from 'prop-types';

export const App = ( { title, subTitle } ) => {

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

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

// export const App = () => <h1>Arrow Hello</h1>