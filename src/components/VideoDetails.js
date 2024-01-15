import React from 'react';

const VideoDetails = ({video}) => {
  if (!video){
    return(
      <div class="ui active inverted dimmer">
       <div class="ui text loader">Loading</div>
     </div>
    );
   }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return(
    <div>
        <div className="ui embed">
        <iframe src= {videoSrc}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={video.snippet.title}
                allowFullScreen>
        </iframe>
        </div>
        <div className="ui segment">
        <div className="content">
          <a href="{video.snippet.title}" className="header"> {video.snippet.title}</a>
          <div className="description">{video.snippet.description}</div>
      </div>

      </div>
    </div>
  );
}

export default VideoDetails;