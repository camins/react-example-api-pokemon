import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { H } from './styles';

import name from '../../assets/name.png';

export default class Header extends Component {
    render() {
        return (
            <H>
                <Link to={`/`}>
                    <img src={name} className="name" alt=""/>
                </Link>
            </H>
        );
    }
}
