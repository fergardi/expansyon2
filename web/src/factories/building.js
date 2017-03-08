var images = [
  'https://image.flaticon.com/icons/svg/232/232481.svg',
  'https://image.flaticon.com/icons/svg/129/129522.svg',
  'https://image.flaticon.com/icons/svg/224/224474.svg'
]

var classes = [
  'grey'
]

const factory = {
  image () {
    return images[Math.floor(Math.random() * images.length)]
  },
  class () {
    return classes[Math.floor(Math.random() * classes.length)]
  },
  build () {
    var building = {
      image: factory.image(),
      name: 'BUILDING',
      building: 'Description',
      class: factory.class()
    }
    return building
  }
}

export default factory
