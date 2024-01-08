export const JerseyData = {
    images: [
      {
        id: 1,
        path: require('../../assets/images/blueShirt3.webp'),
      },
      {
        id: 2,
        path: require('../../assets/images/yellowShirt3.jpg'),
      },
      {
        id: 3,
        path: require('../../assets/images/orangeShirt3.jpg'),
      },
      {
        id: 4,
        path: require('../../assets/images/greenShirt3.jpg'),
      },
    ],
    shareLink: '',
    isSaved: true,
    title: 'Triumph Dri Fit Cricket Jersey T Shirt',
    actualPrice: 999,
    discountedPrice: 899,
    size: 'S',
    sizes: [
        'S', 'M', 'L', 'XL', 'XXL', 'XXXL'
      ],
    color: 'yellow',
    colorRanges: [
      {
        color: 'yellow',
        code: 'yellow',
      },
      {
        color: 'maroon',
        code: '#db3c0b',
      },
      {
        color: 'green',
        code: 'green',
      },
    ],
    details:
      'Suspendisse ut ultrices erat. Prion sadales, ris us ut pellentesque eleifend, nunc nulla vene natis mi, in cursus ex elit ac justo.',
    relatedProducts: [
      {
        id: 1,
        img: require('../../assets/images/helmet.webp'),
        title: 'Asko Blue Country Helmet, For Cricket',
        actualPrice: 99,
        discountedPrice: 90,
        isSaved: false,
        fetch: 'HelmetData',
      },
      {
        id: 2,
        img: require('../../assets/images/helmet.webp'),
        title: 'Asko Blue Country Helmet, For Cricket',
        actualPrice: 99,
        discountedPrice: 90,
        isSaved: false,
        fetch: 'HelmetData',
      },
      {
        id: 3,
        img: require('../../assets/images/helmet.webp'),
        title: 'Asko Blue Country Helmet, For Cricket',
        actualPrice: 99,
        discountedPrice: 90,
        isSaved: true,
        fetch: 'HelmetData',
      },
      {
        id: 4,
        img: require('../../assets/images/greenShirt1.jpg'),
        title: 'Triumph Dri Fit Cricket Jersey T Shirt',
        actualPrice: 999,
        discountedPrice: 899,
        isSaved: true,
        fetch: 'JerseyData',
      },
      {
        id: 5,
        img: require('../../assets/images/yellowShirt1.jpg'),
        title: 'Triumph Dri Fit Cricket Jersey T Shirt',
        actualPrice: 999,
        discountedPrice: 899,
        isSaved: false,
        fetch: 'JerseyData',
      },
    ],
  };

export const HelmetData =  {
    images: [
      {
        id: 1,
        path: '../../assets/images/helmet.webp',
      },
      {
        id: 2,
        path: '../../assets/images/helmet3.webp',
      },
      {
        id: 3,
        path: '../../assets/images/helmet4.webp',
      },
      {
        id: 4,
        path: '../../assets/images/helmet2.webp',
      },
    ],
    shareLink: '',
    isSaved: false,
    title: 'Asko Blue Country Helmet, For Cricket',
    actualPrice: 99,
    discountedPrice: 90,
    size: 's',
    color: 'blue',
    details:
      'Suspendisse ut ultrices erat. Prion sadales, ris us ut pellentesque eleifend, nunc nulla vene natis mi, in cursus ex elit ac justo.',
    relatedProducts: [
      {
        id: 1,
        img: '../../assets/images/blueShirt3.webp',
        title: 'Triumph Dri Fit Cricket Jersey T Shirt',
        actualPrice: 999,
        discountedPrice: 899,
        isSaved: false,
        fetch: 'JerseyData',
      },
      {
        id: 2,
        img: '../../assets/images/greenShirt1.jpg',
        title: 'Triumph Dri Fit Cricket Jersey T Shirt',
        actualPrice: 999,
        discountedPrice: 899,
        isSaved: false,
        fetch: 'JerseyData',
      },
      {
        id: 3,
        img: '../../assets/images/yellowShirt1.jpg',
        title: 'Triumph Dri Fit Cricket Jersey T Shirt',
        actualPrice: 999,
        discountedPrice: 899,
        isSaved: false,
        fetch: 'JerseyData',
      },
      {
        id: 4,
        img: '../../assets/images/helmet.webp',
        title: 'Asko Blue Country Helmet, For Cricket...',
        actualPrice: 99,
        discountedPrice: 90,
        isSaved: false,
        fetch: 'HelmetData',
      },
      {
        id: 5,
        img: '../../assets/images/helmet.webp',
        title: 'Asko Blue Country Helmet, For Cricket...',
        actualPrice: 99,
        discountedPrice: 90,
        isSaved: false,
        fetch: 'HelmetData',
      },
    ],
  };
