import React from 'react';
import './Track.css';

class Track extends React.Component {

  renderAction (){
    if(this.props.isRemoval) {
       return <button className="Track-Action">-</button>
    }else{
       return <button className="Track-Action">+</button>
    }
  }

  render() {
    return (
    <div className="Track">
    <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
    </div>
    {this.renderAction()}
    <button className="Track-action"></button>
</div>
    )
  }
}

export default Track;