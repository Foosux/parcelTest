import React, { PureComponent } from 'react'
import './index.styl'

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
      <div className='test'>这里是一个方块</div>
    </section>)
  }
}
