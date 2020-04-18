import React from 'react'
import {IoMdClose, IoMdRadioButtonOff} from 'react-icons/io'
import './App.css';
import { Link } from 'react-router-dom';

class Page2 extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            radio: "1",
        };

        this.onradiochange = this.onradiochange.bind(this);
    }

    onradiochange(e){
        console.log(e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })
        return e.target.value;
    }

    render(){
        var to = "./page3/" + this.state.radio;
        return(
            <div className="App">
                <h2>Pick your side</h2>
                <form>
                    <div className="col-md-12">
                        <IoMdClose color='skyblue' size='8rem' className="colorx"/>
                        <IoMdRadioButtonOff color='orange' size='8rem' className="coloro"/>
                    </div>
                    <div className="custom-control custom-radio">
                        <input className="radiox" type="radio" name="radio" value="1"  
                        checked={this.state.radio === "1"}
                        onChange={this.onradiochange}/>
                        <input className="radioo" type="radio" name="radio" value="-1" 
                        checked={this.state.radio === "-1"}
                        onChange={this.onradiochange}    />
                    </div>
                </form>
                <div className="col-md-12 space">
                    <Link to={to}>
                        <button className="btn button">Continue</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Page2