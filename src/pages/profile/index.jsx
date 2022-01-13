import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import basePage from '../../utils/basePage'
import './index.less'


@inject('store')
@observer
class Index extends basePage {

  async componentWillMount() {
    await super.componentWillMount()
    console.log('profile componentWillMount')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        profile
      </View>
    )
  }
}

export default Index
