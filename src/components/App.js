import React from 'react';

import Unspash from '../api/Unspash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };
  async onSearchSubmit(term) {
    const response = await Unspash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmittttt={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
