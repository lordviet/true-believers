import React from 'react';
import './link.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Link({ children, to }) {
  return <li className="#">
    <ReactRouterDomLink to={to}>{children}</ReactRouterDomLink>
  </li>;
};

export default Link;