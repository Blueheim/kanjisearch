import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/Card/List/CardList';
import SearchBox from '../components/Search/SearchBox';
import { setSearchField, requestKanjis } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchKanjis.searchField,
    kanjis: state.requestKanjis.kanjis,
    isPending: state.requestKanjis.isPending,
    error: state.requestKanjis.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: event => dispatch(setSearchField(event.target.value)),
    requestKanjis: () => dispatch(requestKanjis()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.requestKanjis();
  }

  render() {
    const { searchField, handleSearchChange, kanjis, isPending } = this.props;

    const filteredKanjis = kanjis.filter(kanji => {
      return kanji.meaning.english
        .join(' ')
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="m-tx-c">
        <h1 className="title">Kanjis</h1>
        <SearchBox searchChange={handleSearchChange} />
        <CardList kanjis={filteredKanjis} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
