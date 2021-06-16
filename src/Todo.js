import React from 'react';
import f from './config/f';

// this is my Todo class compnent, here Data is successfully Adding and deleting in
// Firebase Database as it is intergrated with it and i have also added feature of Edit
// so that Data can be edited too.


class Todo extends React.Component{
    constructor(){
        super()
        this.state ={
            todos:[{title:'Shahab',edit:false},{title:'Ghaus',edit:false}],
            value: '', 
            edit_valie:''
        }
    }
    


    logout(){
        f.auth().signOut();
    }


    // Add todo method
    add_todo= () => {
        var obj ={title:this.state.value}
        
       this.state.todos.push(obj)
       f.database().ref('/').child('todos').push(obj)
       this.setState({
           todos:this.state.todos,
           value:''
       })
    
    }


    
    // Add Delete method
    delete_todo=(index)=>{
        this.state.todos.splice(index,1)
        f.database().ref('/').child('todos').remove()
        this.setState({
            todos:this.state.todos,
            value:''
        })

    }
    edit_todo=(index,val)=>{
        
        this.state.todos[index].edit=true;
        this.setState({
            todos:this.state.todos
           
        })
        
    }


    handleChange=(e,index)=>{
        this.state.todos[index].title=e.target.value;
        this.setState({
            todos:this.state.todos
           
        })
      
    }


    
    // Update todo method
    update=(index)=>{
        
        this.state.todos[index].edit=false;
        this.setState({
            todos:this.state.todos
           
        })
        
    }


       render() {
           let {todos,value}=this.state;
         return (
             
             <div>
                 <h1 style={{textAlign:'center', padding:'50px', backgroundColor:'black', color:'blue'}}> You have Logged in Successfully</h1>
                 <h4> TODO APP BY SHAHAB KHAN</h4>


                 <input className='i1' value={value} onChange={(e)=> this.setState({value:e.target.value}) } type='text' placeholder='Enter Input'/>
                 <button className='b1' onClick={this.add_todo}>Add items</button>


             <ul className='ch'>
                 {todos.map((item,index)=>{
                     return <li className='ch' key={index}>
                         { item.edit ? <input type='text' value={item.title} onChange={(e)=>this.handleChange(e,index)} /> : item.title}

                        { item.edit ?
                         <button className='b3' onClick={()=>this.update(index)}>Update</button> 
                         :
                     <button className='b3' onClick={()=>this.edit_todo(index,item.title)}>Edit</button> 
                      } 
                     <button className='b2' onClick={()=>this.delete_todo(index)}>Delete</button>
                     
                     </li>
                     
                 })}
             </ul>
             

        <button onClick={this.logout} >Log Out</button>


             </div>
             
         )
       }
     }
export default Todo;