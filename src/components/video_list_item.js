import React, {Component} from 'react';

class VideoListItem  extends Component {

    render(){
        let {video, onVideoSelect} = this.props;
        let imgUrl = video.snippet.thumbnails.default.url;
        let title = video.snippet.title;

        return(
          <div onClick={()=> onVideoSelect(video)} className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imgUrl}/>
              </div>

              <div className="media-body">
                  <div className="media-heading">{title}</div>
              </div>
          </div>
        )
    }
}

export default VideoListItem;