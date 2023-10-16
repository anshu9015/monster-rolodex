import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))   
  }
  render(){
    const { monsters, searchField } = this.state;
    const filteredItems = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));


    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder = 'Search Monster' 
          clickMethod = { e => { this.setState({ searchField : e.target.value });  } }
        />
        <CardList monsters={filteredItems}/>   
      </div>
    );
  }
}

export default App;
