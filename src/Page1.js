import React from 'react';
import './App.css';
import {IoMdClose, IoMdRadioButtonOff, IoIosSettings} from 'react-icons/io';
import { Link } from 'react-router-dom';

class Page1 extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="col-md-12">
          <IoMdClose color='skyblue' size='8rem' className="colorx"/>
          <IoMdRadioButtonOff color='orange' size='8rem' className="coloro"/>
        </div>
        <div className="col-md-12">
          <p className="text"><b>Choose Your Play Mode </b></p>
        </div>
        <div className="col-md-12">
          <button className="btn button" disabled>With AI</button>
        </div>
        <div className="col-md-12">
          <Link to='/page2'>
              <button className="btn button">With a Friend</button>
          </Link>
        </div>
        <div className="col-md-12">
          <span ><IoIosSettings className="setting1"/></span>
        </div>
      </div>
    );
  }
}

export default Page1;
