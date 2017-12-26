import React, { PureComponent } from 'react'

export default class extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      say: 'Hello',
    }
  }

  render() {
    const { state, props } = this
    console.log('State:', state, props)
    return (<section>
      { this.state.say }
    </section>)
  }
}
