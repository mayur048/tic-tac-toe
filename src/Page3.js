import React  from 'react'
import './App.css';
import {IoMdClose, IoMdRadioButtonOff, IoIosSettings} from 'react-icons/io'

export default class Page3 extends React.Component{

    constructor(props){
        super(props);

        this.state={ 
            gamestate: [
                [0,0,0],
                [0,0,0],
                [0,0,0],
            ],
            currentplayer: null,
            scorex: 0,
            scoreo: 0,
        }
    }

    componentDidMount(){
        this.initializeGame();
    }

    initializeGame = () =>{
        var url = window.location.href.substring(window.location.href.lastIndexOf('/')+1).toString();
        if (url === "1"){
            this.setState({currentplayer : 1});
        }else if(url === "-1"){
            this.setState({currentplayer : -1});
        }
        this.setState({gamestate:
        [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ],
        });
    }

    onpress = (row, col) =>{
        //dont allow to override
        var value = this.state.gamestate[row][col];
        if(value !== 0){ return; }
        
        // current player
        var player = this.state.currentplayer;

        // set current player
        var arr = this.state.gamestate.slice();
        arr[row][col] = player;
        this.setState({gamestate: arr});

        // switch next player
        var next = player === 1 ? (-1) :(1);
        this.setState({currentplayer: next});

        // check Winner
        var winner = this.getwinner();
        if (winner === 1){
            window.alert("Player X Wins!");
            this.setState({scorex: this.state.scorex + 1});
            this.initializeGame();
        }else if(winner === -1){
            window.alert("Player O Wins!");
            this.setState({scoreo: this.state.scoreo + 1});
            this.initializeGame();
        }
    }   

    getwinner = () =>{
        const tiles = 3;
        var arr = this.state.gamestate;
        var sum;

        // for rows
        for(var i=0; i<tiles; i++){
            sum = arr[i][0] + arr[i][1] + arr[i][2];
            if( sum === 3){ return 1}
            else if( sum === -3){ return -1}
        }
        
        // for columns
        for(var j=0; j<tiles; j++){
            sum = arr[0][j] + arr[1][j] + arr[2][j];
            if( sum === 3){ return 1}
            else if( sum === -3){ return -1}
        }

        //for diagonals
        sum = arr[0][0] + arr[1][1] + arr[2][2];
        if( sum === 3){ return 1}
        else if( sum === -3){ return -1}

        sum = arr[0][2] + arr[1][1] + arr[2][0];
        if( sum === 3){ return 1}
        else if( sum === -3){ return -1}

        //no winner
        return 0;
    }

    drawIcon = (row, col) =>{
        var value = this.state.gamestate[row][col];
        switch(value){
            case 1: return <IoMdClose color='skyblue' size='4rem' className="colorx"/>;
            case -1: return <IoMdRadioButtonOff color='orange' size='4rem' className="coloro"/>
            default: return null; 
        }
    }

    restGame = () => {
        this.initializeGame();
    }

    render(){
        return(
            <div className="App">
                <div className="col-md-12 lstyle">
                    <b>
                        <label className="player1">Player X</label>&nbsp;&nbsp;
                        <label className="score">{this.state.scorex} - {this.state.scoreo}</label>&nbsp;&nbsp;
                        <label className="player2">Player O</label>&nbsp;&nbsp;
                    </b>
                </div>
                <div className="col-md-12">
                    <div className="col-md-4 center">
                        <div className="row">
                            <div className = "box-1" onClick={() => this.onpress(0,0)}>
                                {this.drawIcon(0,0)}
                            </div>
                            <div className = "box-2" onClick={() => this.onpress(0,1)}>
                                {this.drawIcon(0,1)}
                            </div>
                            <div className = "box-3" onClick={() => this.onpress(0,2)}>
                                {this.drawIcon(0,2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className = "box-4" onClick={() => this.onpress(1,0)}>
                                {this.drawIcon(1,0)}
                            </div>
                            <div className = "box-5" onClick={() => this.onpress(1,1)}>
                                {this.drawIcon(1,1)}
                            </div>
                            <div className = "box-6" onClick={() => this.onpress(1,2)}>
                                {this.drawIcon(1,2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className = "box-7" onClick={() => this.onpress(2,0)}>
                                {this.drawIcon(2,0)}
                            </div>
                            <div className = "box-8" onClick={() => this.onpress(2,1)}>
                                {this.drawIcon(2,1)}
                            </div>
                            <div className = "box-9" onClick={() => this.onpress(2,2)}>
                                {this.drawIcon(2,2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <span onClick={() => this.restGame()}><IoIosSettings className="setting"/></span>
                </div>
            </div>
        )
    }   
}

