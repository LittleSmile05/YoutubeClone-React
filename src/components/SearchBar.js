import React from 'react';


class SearchBar extends React.Component{
  constructor() {
    super();
    this.state = {
      term:''
    };
  }
  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }
  onFormSubmit = (e) => {
    e.preventDefault();

    // call back function
    this.props.onFormSubmit(this.state.term);

  }
  render(){
    return(
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
             <div className="ui red ribbon label">YouTube video search</div>
            <div className="ui input icon focus" style={{marginTop:"10px"}}>
               <input
                 value={this.state.term}
                 type="text"
                 placeholder="Search..."
                 onChange={this.onInputChange}
               />
                <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;