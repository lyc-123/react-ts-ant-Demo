import http from '../axios';
/**
 * 获取首页列表
 */
function getCalendar(){
    return new Promise((resolve, reject) => {
      http("post",'/util/getCalendar',{}).then(res => {
        resolve (res);
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
    }) 
  }
  
  export {
    getCalendar
  }