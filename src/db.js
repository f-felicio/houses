const houses = [
  {
    id: 0,
    address: 'Six Pancras Square',
    city: 'London',
    photos: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    ],
    plot: '125',
    beds: 4,
    baths: 2,
    garage: 2,
    price: '420.000',
  },
  {
    id: 1,
    address: '111 8th Ave',
    city: 'New York',
    photos: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    ],
    plot: '125',
    beds: 2,
    baths: 1,
    garage: 1,
    price: '220.000',
  },
  {
    id: 2,
    address: 'Six Pancras Square',
    city: 'London',
    photos: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    ],
    plot: '125',
    beds: 4,
    baths: 2,
    garage: 2,
    price: '420.000',
  },
  {
    id: 3,
    address: 'Six Pancras Square',
    city: 'London',
    photos: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    ],
    plot: '125',
    beds: 4,
    baths: 2,
    garage: 2,
    price: '420.000',
  },
  {
    id: 4,
    address: '235 2nd St',
    city: 'San Francisco',
    photos: [
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    ],
    plot: '145',
    beds: 4,
    baths: 2,
    garage: 2,
    price: '420.000',
  },
];

const collections = [
  {
    name: 'Family home',
    image: require('./assets/bg-family.jpg'),
    about:
      'Lorem ipsum dolor sit amet, noluisse tractatos at his. Prima reformidans quo ei, mea ex quis choro, usu iisque viderer aperiri an. Ex porro iuvaret vivendum pro, autem dicta feugait vix ut. Feugiat iracundia appellantur nec id, mutat noluisse duo ne, pro aeque soluta iracundia no.Moderatius dissentias an eum. Ea maiorum accusata per, errem nostro adipiscing id vix.',
  },
  {
    name: 'Living with friends',
    image: require('./assets/bg-friends.jpg'),
    about:
      'Lorem ipsum dolor sit amet, noluisse tractatos at his. Prima reformidans quo ei, mea ex quis choro, usu iisque viderer aperiri an. Ex porro iuvaret vivendum pro, autem dicta feugait vix ut. Feugiat iracundia appellantur nec id, mutat noluisse duo ne, pro aeque soluta iracundia no.Moderatius dissentias an eum. Ea maiorum accusata per, errem nostro adipiscing id vix.',
  },
  {
    name: 'Just the two of us',
    image: require('./assets/bg-couple.jpg'),
    about:
      'Lorem ipsum dolor sit amet, noluisse tractatos at his. Prima reformidans quo ei, mea ex quis choro, usu iisque viderer aperiri an. Ex porro iuvaret vivendum pro, autem dicta feugait vix ut. Feugiat iracundia appellantur nec id, mutat noluisse duo ne, pro aeque soluta iracundia no.Moderatius dissentias an eum. Ea maiorum accusata per, errem nostro adipiscing id vix.',
  },
  {
    name: 'Pet friendly',
    image: require('./assets/bg-pet.jpg'),
    about:
      'Lorem ipsum dolor sit amet, noluisse tractatos at his. Prima reformidans quo ei, mea ex quis choro, usu iisque viderer aperiri an. Ex porro iuvaret vivendum pro, autem dicta feugait vix ut. Feugiat iracundia appellantur nec id, mutat noluisse duo ne, pro aeque soluta iracundia no.Moderatius dissentias an eum. Ea maiorum accusata per, errem nostro adipiscing id vix.',
  },
];

module.exports = {
  HouseList: houses,
  CollectionList: collections,
};
