import React from 'react';
import Minibig from './Minibig';
import Todo from './Todo';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
render(){
  return(
    <div>
    <Navbar/>
    <Minibig/>
    <Footer/>
    </div>
  )
}


}
export default App;