import Axios from "axios";

export const getCurrentCity = () => {
  // 获取本地存储信息
  const localCity = JSON.parse(localStorage.getItem("bkzf"));
  if (!localCity) {
    // 地理位置信息
    return new Promise((resolve, reject) => {
      const myCity = new window.BMap.LocalCity();
      myCity.get(async (res) => {
        try {
          const result = await Axios.get(
            `http://localhost:8080/area/info?name=${res.name}`
          );
          localStorage.setItem("bkzf", JSON.stringify(result.data.body));
          resolve(result.data.body);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  //   处理localstorage 存储数据情况
  return Promise.resolve(localCity);
};
