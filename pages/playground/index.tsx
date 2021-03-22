import React, {Component} from 'react'

type StateType = {
    counter : number;
    visible : boolean;
}

export default class PlayGround extends Component<any, StateType> {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            visible: true
        }
        console.log("constructor");
    }
    
    UNSAFE_componentWillMount(){
        console.log("ComponentWillMount");
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }

    UNSAFE_componentWillUpdate(){
        console.log("ComponentWillUpdate");
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }

    render(){
        console.log("Render run");
        // console.log("this.props", this.props);
        // console.log("this.state", this.state);
         return (
             <div className="container">
                <h1>Play Ground - LIfe Cycle - React Hooks</h1>
                <button onClick={()=>{
                //   this.setState({
                //       counter: this.state.counter+1
                //   })
                    this.setState((preState)=>{
                        return {
                            counter: preState.counter + 1
                        }
                    });
                }}>Counter Add</button>
                <p>{this.state.counter}</p>
             </div>
         )
    }
}