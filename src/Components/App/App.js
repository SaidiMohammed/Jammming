import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      loggedIn: false,
      playlistTracks: []
    };
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.login = this.login.bind(this);
  
    // Check if the user is logged in
  }
  async checkLoggedIn(){
    try {
      const token = await Spotify.getAccessToken();
      if (token) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    } catch (error) {
      console.log(error);
      this.setState({loggedIn: false});
    }
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
  }

  async login() {
    const token = await Spotify.getAccessToken(true);
    if (token) {
      this.setState({loggedIn: true});
      document.getElementById("button").innerHTML = "Logged In";
    }
  }

  render() {
    return (
    <div>
      <div className="login-btn"> 
            <button onClick={this.login} id="button"><img src={require('./Spotify.png')} id="Spotify_Logo"/>Login</button>
      </div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults}
                       onAdd={this.addTrack} />
        <Playlist playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
