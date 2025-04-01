import React, { Component } from 'react';

export class NavBar extends Component {
  

  render() {
    return (
      <div className="navbar-dark bg-dark " data-bs-theme="dark" >
        <ul className="nav nav-underline">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">RUPANJALI</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="/business">Business</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/entertainment">Entertainment</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/general">General </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/health">Health</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/science">Science</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/sports">Sports </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/technology">Technology</a>
            </li>
           
        </ul>
      </div>
    )
  }
}

export default NavBar
