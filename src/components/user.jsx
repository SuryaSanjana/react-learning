import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          planet : "earth", //no other component can access it
        };
        console.log("hey im from constructor");
    }
    // componentDidMount(){
    //      console.log("hey im from componentDidMount() ");
    //     this.setState({
    //         planet:"Mars"
    //     })
    // }

    // updating

    componentDidMount(){
        this.setState({planet:"Jupitor"});
    }

                                                   // static getDerivedStateFromProps(prop,state){
                     //not working ->                               //     console.log("heY Im from getderived state props");
                                                    //     return {planet:"Jupitor"};
                                                    // }
    shouldComponentUpdate(nextProp,nextState){
        console.log("from shouldComponentUpdate");
        console.log({
          nextProp,
          nextState,  
        });
        return true;  // returning true so that it execute the other functions also
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("from getSnapshotBeforeUpdate");  
        console.log({
            prevProp,
            prevState,
        });
        return true;
    }

    componentDidUpdate(){    //rarely used
      console.log(this.state);
    }
    render(){
        console.log("hey im from render()");
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet }</h4>   {/* to access the state*/ }

            </div>
        ); 
    } 
};
export default User;




// const User =(props)=>{    // to dynamically assign values we use props . its a kind of paramenter
//     return (      
//      <div>  
//          <h1>{props.name}</h1>  
//          <p>{props.description}</p>       
//      </div>
//     ); 
// };

// export default User;
