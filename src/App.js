import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';
import Scroll from "./components/scroll";

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(
        () => { return { monsters: users.users } },
        () => { console.log(this.state) }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    }, () => { console.log(this.state) })
  }

  render() {
    // optimization 
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filterMonsters = monsters.filter((monster) => {
      return monster.firstName.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className="app-title">RoboFriends</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search-box' className='search-box' />
        <Scroll>
          <CardList monsters={filterMonsters} />
        </Scroll>
      </div>
    )
  }
}

export default App