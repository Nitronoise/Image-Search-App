import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../Api/Unsplash";
import ImageList from "../Components/ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term, per_page: 30 },
      }
    );
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ paddingTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
