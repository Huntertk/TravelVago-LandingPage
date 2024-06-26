import'../../styles/videoContainer.scss';
import videoFile from '../../assets/video.mp4'

const VideoContainer = () => {
  return (
    <section className='videoContainerMainSection'>
        <div className="videoContentContainer">
            <h1>Watch Our Video</h1>
            <p className='subTitle'>Take a Tour</p>
            <p className="desc">Everything was seamless. The private guides were interesting and knowledgeable. We felt that they were more than just guides.</p>
        </div>
        <div className="videoWrapper">
            <video 
            className='video'
            src={videoFile}
            loop
            autoPlay
            muted
            />
            
    </div>
    </section>
  )
}

export default VideoContainer