import React from 'react';
import f from './config/f';
import Login from './Login';
import Main from './Main';
import Todo from './Todo'

import './App.css';

class Minibig extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authLister();
  }


  
  authLister(){
    f.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({
          user: null
        })
      }
    })
  }



  render(){
    return(
      <div className='App'>
        {
          this.state.user ? (<Todo/>):(<Login/>)
        }
      </div>
    )
  }
}

export default Minibig;
