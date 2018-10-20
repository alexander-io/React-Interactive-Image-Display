import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.src = props.src
  }
  // swap the src property of the cover image with this block's src
  swap = () => {
    var tmp = this.state.src
    this.state.src  = document.getElementById('cover').src
    document.getElementById('cover').src = tmp
    this.forceUpdate()
  }
  render () {
    return (
      <img
        src={this.state.src}
        className="tile"
        onClick={this.swap}
      ></img>
    )
  }
}

class Cover extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cover_wrapper">
        <div className="row">
          <img id="cover" className="cover_img" src="http://alxndr.io/clay03.jpg"></img>
          <div className="array_container">
            <Block src="http://alxndr.io/clay04.jpg" />
            <Block src="http://alxndr.io/clay03.jpg" />
            <Block src="http://alxndr.io/clay02.jpg" />
            <Block src="http://alxndr.io/clay01.jpg" />
            <Block src="http://alxndr.io/clay00.jpg" />
            <Block src="http://alxndr.io/clay05.jpg" />
          </div>
        </div>
        <div className="col">
          <div className="lower_array">
            <Block src="http://alxndr.io/clay04.jpg" />
            <Block src="http://alxndr.io/clay03.jpg" />
            <Block src="http://alxndr.io/clay02.jpg" />
            <Block src="http://alxndr.io/clay01.jpg" />
            <Block src="http://alxndr.io/clay00.jpg" />
            <Block src="http://alxndr.io/clay05.jpg" />
            <Block src="http://alxndr.io/clay01.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Cover />, document.getElementById("root"))
