import React, { useEffect, useState } from "react";

function Mypractic() {
  const [youTubeVideos, addVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC21vZeX7TyXWLgRLBIPbHDeTrwGo5IL44&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        addVideos(youTubeVideos);
      });
  }, []);

//   console.log(youTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>

          {youTubeVideos?.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );

            return videoWrapper;
          })}

          <div className="col-sm-12 col-md-4">
            <div className="singleVideoWrapper">
              <div className="videoThumbnail">
                <a target="_blank">
                  <img />
                </a>
              </div>
              <div className="videoInfoWrapper">
                <div className="videoTitle">
                  <a target="_blank">video</a>
                </div>
                <div className="videoDesc">description</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypractic;
