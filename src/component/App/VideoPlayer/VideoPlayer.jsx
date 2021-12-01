import React, {Component} from "react";

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredVideoId: {},
        }
    }
    
    selectedVideo() {
        let response = "Tch4v0L0GHA";
        console.log(response);
        this.setState({
            enteredVideoId: response
        })
    }
    
    render() {
        this.selectedVideo();
        return(
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.enteredVideoId}?autoplay=1&origin=http://example.com`}
                frameBorder="0">
            </iframe>
            <h1>The title and Description will go here.</h1>
        </div>)
    }

}
// const VideoPlayer = (props) => {
    
//     return (<div>
//                 <iframe id="ytplayer" type="text/html" width="640" height="360"
//                     src="https://www.youtube.com/embed/_6Y52JHN-LA?autoplay=1&origin=http://example.com"
//                     frameborder="0">
//                 </iframe>
            
//                 <h1>The title and Description will go here.</h1>

//             </div>)}
    

export default VideoPlayer;