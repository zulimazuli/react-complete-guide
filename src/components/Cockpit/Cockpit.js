import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // simulate http request
        setTimeout(() => {
            alert('Done!');
        }, 1000)
        return () => {
            console.log('[Cocpit.js] cleanup work, on dismount')
        }
    }, []); // e.g. [element-to-follow], [] = only once, nothing = every update

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cocpit.js] cleanup work, on 2nd dismount')
        }
    });

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>It is working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
        </button>
        </div>);
};

export default React.memo(cockpit);