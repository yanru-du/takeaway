const sino = {
  // 判空
  checkIsNull(params) {
    return params === "null" || params === null || params === undefined || params === 'undefined' || params.length == 0 || params === '';
  },
  // 页面加载前保存表格的信息
  beforeunload(obj, callback) {
    let arr = [];
    for (let key in obj) {
      let newObj = {};
      newObj.key = key;
      newObj.value = obj[key];
      arr.push(newObj)
    }
    if (callback)
      callback(arr)
    else
      return arr;
  },
  //页面加载完之后渲染表格数据
  renderDataLoaded(arr, callback) {
    if (!this.checkIsNull(arr)) {
      arr = JSON.parse(arr);
      let obj = {};
      arr.forEach((item) => {
        obj[item.key] = item.value
      });
      console.log(obj);
      if (callback)
        callback(obj);
      else
        return obj;
    }
  }

};


export default sino