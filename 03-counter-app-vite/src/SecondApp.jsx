import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hello',
    title: 'Greeting'
}

const askMood = () => {
    return 'Como estas ?';
}

const MyName = ({title, subtitle, name}) => {
    // console.log(props);

    /* if(!title){
        throw new Error('El titulo no existe');
    } */
    return (
        <>
            <h1>{title}</h1>
            {/* <code> { JSON.stringify(newMessage) } </code> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
};

MyName.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

MyName.defaultProps = {
    name: 'Paul',
    subtitle: 123,
    title: 'No hay titulo',
}

export default MyName;
