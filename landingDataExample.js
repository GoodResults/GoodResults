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

console.log(examples[2])
