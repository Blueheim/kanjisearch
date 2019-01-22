import React from "react";
import { connect } from "react-redux";
import CardList from "../components/Card/List/CardList";
import SearchBox from "../components/Search/SearchBox";
import { setSearchField, requestKanjis } from "../actions";
import { IKanji, IStateSearch, IStateKanjis } from "../types/kanji";

interface IState {
  searchKanjis: IStateSearch;
  requestKanjis: IStateKanjis;
}

const mapStateToProps = (state: IState) => {
  return {
    searchField: state.searchKanjis.searchField,
    kanjis: state.requestKanjis.kanjis,
    isPending: state.requestKanjis.isPending,
    error: state.requestKanjis.error
  };
};

const mapDispatchToProps = (dispatch: (action: any) => any) => {
  return {
    handleSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement).value;
      dispatch(setSearchField(value));
    },
    requestKanjis: () => dispatch(requestKanjis())
  };
};

class App extends React.Component<any, any>
// <
//   {
//     searchKanjis: (text: string) => any;
//     requestKanjis: () => any;
//     handleSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => any;
//   } & IStateKanjis &
//     IStateSearch
// >
{
  public componentDidMount() {
    this.props.requestKanjis();
  }

  public render() {
    const { searchField, handleSearchChange, kanjis, isPending } = this.props;

    const filteredKanjis = kanjis.filter((kanji: IKanji) => {
      return kanji.meaning.english
        .join(" ")
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
