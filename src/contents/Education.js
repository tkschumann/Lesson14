import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Associates in Applied Science" where="Wake Tech" from="August 2018" to="Present"/>
            <Widecard title="General Studies" where="Fuquay Varina High School" from="2009" to="2013"/>
            </div>
            )
        }
    }
    
export default Education
    