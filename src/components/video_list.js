import React, {Component} from 'react';
import VideoListItem from './video_list_item';
// import PropTypes from 'prop-types';

class VidioList extends Component {
    // static propTypes = {
    //
    // };

    render(){
        let {videos, onVideoSelect} = this.props;

        let videoElements = videos.map((video) => <li className="list-group-item" key={video.id.videoId}>
            <VideoListItem video={video} onVideoSelect={onVideoSelect}/>
        </li>)

        return(
            <ul className="col-md-5 list-group">
                {videoElements}
            </ul>
        )
    }
}

export default VidioList