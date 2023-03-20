import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props){
    super(props);


    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction (){
    if(this.props.isRemoval) {
       return <button className="Track-action" onClick={this.removeTrack}>-</button>
    }else{
       return <button className="Track-action" onClick={this.addTrack}>+</button>
    }
  }

  addTrack(){
    this.props.onAdd(this.props.track);
  }

  removeTrack(){
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
    <div className="Track">
    <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.album}</p>
        <div className="spotify-player">
          <iframe 
            title="spotify-player"
            src={`https://open.spotify.com/embed/track/${this.props.track.id}`}
            width="100%" 
            height="80"
            allow="encrypted-media">
          </iframe>
        </div>
    </div>
    {this.renderAction()}
    <button className="Track-action"></button>
</div>
    )
  }
}

export default Track;