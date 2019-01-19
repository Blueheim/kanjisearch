import React, { Component } from 'react';
import CardList from '../components/Card/List/CardList';
import SearchBox from '../components/Search/SearchBox';
import Scroll from '../components/UI/Scroll';
import getData from '../util/getData';

class App extends Component {
  state = {
    kanjis: [],
    searchfield: '',
  };

  componentDidMount() {
    getData('GET_ALL').subscribe(fetchRes => {
      console.log(fetchRes);
      this.setState({ kanjis: fetchRes });
    });
  }

  handleSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { kanjis, searchfield } = this.state;
    const filteredKanjis = kanjis.filter(kanji => {
      return kanji.meaning.english
        .join(' ')
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !kanjis.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="m-tx-c">
        <h1 className="title">Kanjis</h1>
        <SearchBox searchChange={this.handleSearchChange} />
        <CardList kanjis={filteredKanjis} />
      </div>
    );
  }
}

export default App;
