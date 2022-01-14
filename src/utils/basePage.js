import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import Taro from "@tarojs/taro";

class Index extends Component {

  async componentWillMount() {
    console.log('this', this)
    await this.login();
    console.log('base componentWillMount')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  async login() {
    const userStore = this.props.userStore || this.props.store && this.props.store.userStore
    console.log('userStore', userStore)

    let isNeedLogin = true
    if (userStore && userStore.userInfo && userStore.userInfo.token) {
      // TODO 校验token...
      isNeedLogin = false
    }
    if (isNeedLogin) {
      let loginData = await Taro.login().catch(err => {
        console.log("err ", err);
      });

      if (!loginData.code) {
        // utils.toast("登录失败");
        return;
      }

      let results = await Taro.request({
        url: 'https://hbdapi.jshbc2017.com/baouser/login/wxLogin', //仅为示例，并非真实的接口地址
        data: { code: loginData.code },
        method: 'post',
        header: {
          'content-type': 'application/json' // 默认值
        },
      }).catch(() => {
        Taro.showToast({
          icon: "none",
          title: results.msg || "网络异常，请稍后重试"
        });
      });
      console.log('results', results)
      console.log(2222)
      if (userStore) {
        userStore.updateUserInfo(results.data.data)
      }
    }
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
