import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div
        className="ui segment"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          className="ui icon input"
          style={{ width: "40%" }}
          onSubmit={this.onFormSubmit}
        >
          <label
            style={{
              marginRight: "10px",
              lineHeight: "40px",
              fontWeight: "bolder",
              display: "flex",
              position: "relative",
            }}
          >
            Image Search
          </label>
          <input
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
            type="text"
            placeholder="Enter keyword.."
          />
          <i className="inverted circular search link icon"></i>
        </form>
      </div>
    );
  }
}
export default SearchBar;
