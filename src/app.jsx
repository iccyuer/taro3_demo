import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'
import userStore from './store/user'

import './app.less'

const store = {
  counterStore,
  userStore
}

class App extends Component {
  async componentDidMount () {
    console.log('app componentDidMount')
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
