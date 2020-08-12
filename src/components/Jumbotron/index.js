import React from "react";
import './style.css';

const Jumbotron = () => {
   return (
        <div id="name">
            <h1 className="bigWord m-0">Hello,</h1> 
            <h1 className="bigWord m-0">my name is <span className="bigWordName m-0">Eunah Kim</span></h1>
            <h4 className="text-right">and welcome to my page.</h4><br />
        </div>
   ) 
};

export default Jumbotron;

