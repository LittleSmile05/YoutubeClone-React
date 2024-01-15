import React from 'react';
import SearchBar from './components/SearchBar';
import YoutubeApi, { baseParams } from './api/YoutubeApi';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

class App extends React.Component {
  constructor(){
    super();
    this.state = {video: [], selectedVideo: null};
  }

  componentDidMount(){
    this.onFormSubmit('Configure passwordless sudo for a specific user in linux itsvinayak');
  }

  onFormSubmit = async (term) => {
    const res = await YoutubeApi.get('/search',{
          params: {
            ...baseParams,
            q: term,
          }
        })

    this.setState({
      video: res.data.items,
      selectedVideo: res.data.items[0],
    });
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  }

  render(){
    return(
      <div className="ui container">
       <SearchBar onFormSubmit={this.onFormSubmit}/>
         <div className="ui two column stackable grid">
             <div className="ten wide column">
               <VideoDetails video={this.state.selectedVideo} />
             </div>
             <div className="six wide column">
               <VideoList
                 onVideoSelect={this.onVideoSelect}
                 videos={this.state.video}
               />
           </div>
          </div>
         </div>
    );
  }
}

export default App;