import React from 'react';
import f from './config/f';
import Login from './Login';
class Main extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
          
        }
    }


    logout(){
        f.auth().signOut();
    }
    render(){
        return(
            <div>

                <h1>Welcome! You are  Logged In</h1>
                <button onClick={this.logout} >Log Out</button>
            </div>

        )
    }
}

export default Main;