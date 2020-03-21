//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
Array.prototype.rand = function () {
  return this[Math.floor(Math.random() * this.length)]
}

const examples = [
  {
    showCloseButton: [false, true].rand()
  },
  {
    showCloseButton: false, // true / false
    bookCover: './media-assets/412V6YJjGNL._SL500_.jpg'
  },
  {
    showCloseButton: [false, true].rand(),
    bookCover: [
      './media-assets/412V6YJjGNL._SL500_.jpg',
      './media-assets/cover2.jpg',
      './media-assets/cover3.jpg'
    ].rand()
  }
]

const qrtip = require('qrtip')

console.log(qrtip.tip(JSON.stringify(examples[2])))
