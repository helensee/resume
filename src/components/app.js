import { h, Component } from 'preact' // eslint-disable-line

import Resume from './resume'

if (module.hot) {
  require('preact/debug')
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event  "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  static handleRoute (e) {
    this.currentUrl = e.url
  }

  render () {
    return (
      <div id='app'>
        <Resume />
      </div>
    )
  }
}
