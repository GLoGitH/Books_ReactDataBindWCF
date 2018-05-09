import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookContainer from './BookContainer';

class App extends Component 
{
  constructor(props) 
  {
      super(props);
      var data = [
      { Count : 1, Author: "Shanu",  Bookdesc: "C# Book written by Shanu " ,         NAMES: "C#"},
      { Count : 2, Author: "Afreen", Bookdesc: "C# Book written by Shanu " ,         NAMES: "REACTJS"},
      { Count : 3, Author: "Afraz",  Bookdesc: "ASP.NET MVC Book written by Shanu ", NAMES: "ASP.NET MVC" }
      ];
      this.state = { data: data} ;

  }



  render() 
  {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <BookContainer data={this.state.data} /> 
        </p>
      </div>
    );

  }
}

export default App;
