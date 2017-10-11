import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';

const API_KEY= "AIzaSyBYKnjh-IpEtDdU1sM8vEJtSrkP819Cero";

export default class App extends Component {

   constructor(props){
       super(props);

       this.state = {
           videos: [],
           selectedVideo: null
       };

       this.videoSearch('Rotting Christ')
   }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term},  (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }



  render() {
    return (
      <div>
          <SearchBar onSearchBarChange={(term)=> this.videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
              onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
              videos={this.state.videos} />
      </div>
    );
  }
}
