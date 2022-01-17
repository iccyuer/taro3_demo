import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import basePage from '../../utils/basePage'
import './index.less'
import Taro from "@tarojs/taro";

// @inject('store')
@inject(({ store }, props) => ({
  userStore: store.userStore
}))
@observer
class Index extends basePage {

  async componentWillMount() {
    await super.componentWillMount()
    let { userInfo } = this.props.userStore;
    console.log('userInfo', userInfo)
    console.log('profile componentWillMount')
    this.getUserLevel(userInfo.token)
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  async getUserLevel(token) {
    let results = await Taro.request({
      url: 'https://hbdapi.jshbc2017.com/baouser/user/getUserLevel', //仅为示例，并非真实的接口地址
      data: {},
      method: 'post',
      header: {
        'content-type': 'application/json', // 默认值
        'authorization': token
      },
    }).catch(() => {
      Taro.showToast({
        icon: "none",
        title: results.msg || "网络异常，请稍后重试"
      });
    });
    console.log('user', results.data)
  }

  render() {
    return (
      <View className='index'>
        profile
      </View>
    )
  }
}

export default Index
