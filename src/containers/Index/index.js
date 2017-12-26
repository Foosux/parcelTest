import React, { PureComponent } from 'react'
// import CSSModules from 'react-css-modules'
// import style from './index.styl'
import style from './index.css'

// @CSSModules(style)
export default class extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      say: 'Hello',
    }
  }
  componentDidMount(){
  }
  render() {
    const { state, props } = this
    console.log('State:', state, props)
    return (<section>
      { this.state.say }
      <div className={style.title}>这里是一个方块</div>
    </section>)
  }
}
