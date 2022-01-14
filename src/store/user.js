import { observable } from 'mobx'
import Taro from "@tarojs/taro";

let userData = {};
try {
  userData = Taro.getStorageSync("userInfo") || {};
  console.log('init user @@@@@@@@@@@@@@')
} catch (e) { }

const userStore = observable({
  userInfo: userData,
  updateUserInfo(data) {
    if (data.token) {
      this.userInfo = Object.assign({}, this.userInfo, data, {
        updateHome: true,
        updateCommunity: true
      });
    } else this.userInfo = Object.assign({}, this.userInfo, data);
    Taro.setStorage({ key: "userInfo", data: this.userInfo })
  },
})

export default userStore
