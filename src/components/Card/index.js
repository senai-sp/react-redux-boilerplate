import React, { Component } from "react";
import './style.scss';

import PropTypes from "prop-types";

const Todo = ({children}) => (
  <div className='card'>
    {children}
  </div>
);
export default Todo;
