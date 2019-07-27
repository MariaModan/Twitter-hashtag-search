import React from 'react';
import Header from './Header';
import Search from './Search';
import './twitterLogo.png';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  updateInput = (ev) => {
    this.setState({
      input: ev.target.value
    })
  }

  search = (ev) => {
    ev.preventDefault();
    
    this.setState({
      input: ''
    })
    console.log(this.state.input);
  }



  render(){
    
    return (
      <div className="App">
        <Header />
        <Search search={this.search} input={this.state.input} updateInput={this.updateInput}/>
        <p>{}</p>
      </div>
    );
  }
 
}

export default App;
