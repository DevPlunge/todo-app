import React from 'react';

const Heading = ({ label, size, center}) => {
    
    switch( size ) {

        case '1':
            return (
                <h1 className={ center ? 'center' : '' }>{ label }</h1>
            );
        case '2':
            return (
                <h2>{ label }</h2>
            );
        case '3':
            return (
                <h3>{ label }</h3>
            );
        case '4':
            return (
                <h4>{ label }</h4>
            );
        case '5':
            return (
                <h5>{ label }</h5>
            );
        case '6':
            return (
                <h6>{ label }</h6>
            );
        default:
            return (
                <h1>{ label }</h1>
            )

    }
    
}

export default Heading;
