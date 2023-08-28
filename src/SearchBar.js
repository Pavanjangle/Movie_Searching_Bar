import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
