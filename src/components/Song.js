import React from 'react';

class Song extends React.Component {
  render() {
    const { dispatch, spotify } = this.props;
    console.log(spotify.get("Data"));
    return (
        <div className="pure-u-1-3">
          <img src={this.props.Image} />
          <h4>{this.props.Album}</h4>
        </div>
      )
  }
}