import React, { Component, Fragment } from 'react'
// import { X } from 'react-feather'

import './Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = { showPopup: false }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  handleKeyDown = ev => {
    if (ev.keyCode === 13 && !this.state.showPopup) {
      // enter to open
      this.togglePopup()
    } else if (ev.keyCode === 27 && this.state.showPopup) {
      // escape to close
      this.togglePopup()
    }
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>


    <div
      className="button"
      onClick={this.togglePopup.bind(this)}
      onKeyDown={this.handleKeyDown}
      tabIndex={0}
      aria-label="Toggle Popup"
      role="button"
      style={{margin:'0 auto', display: 'grid', placeContent:'center', maxWidth:'300px'}}
      >
            Click To Launch Popup
          </div>
        
        {this.state.showPopup ? (
          <div className="Popup-Overlay">

            <button
              className="Popup-Background"
              onClick={this.togglePopup.bind(this)}
              onKeyDown={this.handleKeyDown}
              tabIndex={0}
              aria-label="Toggle Popup"
              role="button"
            ></button>

            <div className="Popup-Inner">
              <button
                className="Popup-Close"
                onClick={this.togglePopup.bind(this)}
                onKeyDown={this.handleKeyDown}
                tabIndex={0}
                aria-label="Toggle Popup"
                role="button"
              >Close</button>
              {children}
            </div>

          </div>
        ) : null}
      </Fragment>
    )
  }
}
export default Popup
