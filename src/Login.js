import React from 'react';
import f from './config/f';


// Login Class Component here i have connected it eith Firebase Authentication and Email and password authentication is 
// successsfully working and retreiving from firebase


// Login Class component
class Login extends React.Component{
    constructor(props)
    {
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email:"", password:""
        }
    }


    login(e){
        e.preventDefault();
        f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }

    
    signup(e){

        e.preventDefault();
        f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })


    }


    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(

            
            
            <div>
                <h1 style={{textAlign:'center', padding:'50px', backgroundColor:'black', color:'blue'}}>Welcome to MiniBig Technologies</h1>
                 
                 
                 <h4 style={{fontSize:'15px'}}>If you want to Access Todo app and you are a new user so first Enter Email and Password
                     and then press Sign Up button First, If you are an existing user then simply Enter Email and Password and press Login Button
                 </h4>



                <form>
                    <label style={{padding:'10px', fontFamily:"sans-serif", fontSize:"40px"}}>Email :</label>
                   
                   
                   
                    <input
                    name='email'
                    type='email' id='email' placeholder='Please Enter Your Email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <br/>
                    <label style={{padding:'10px', fontFamily:"sans-serif", fontSize:"40px"}}>Password :</label>




                   <input
                    name='password'
                    type='password' id='password' placeholder='Please Enter Your Password'
                    onChange={this.handleChange}
                    value={this.state.password}
                    />
                    <br/>




                    <button style={{padding:'10px', color:'blue'}}  onClick={this.login}>Login</button>
                    <button style={{padding:'10px', color:'blue' , marginLeft:'15px'}} onClick={this.signup}>Sign Up</button>   


                </form>

            </div>

        )
    }
}

export default Login;