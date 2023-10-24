import React from 'react';
import { ScrollView, Image } from 'react-native';
export const images = [
  'https://cdn1-production-images-kly.akamaized.net/FJ3-i6U7Fk4NAznzDggvwOZijTA=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3258933/original/050240400_1601958570-photo-1571019613454-1cb2f99b2d8b.jpg',
  'https://www.rsannisa.co.id/img/thumbnail/b2ab667cc5693ca00b8148a2b49150e2.jpg',
  'https://cdn.hellosehat.com/wp-content/uploads/2022/02/6f455ebf-kebugaran-jasmani.jpg?w=640&q=75',
];
const slider = {
  image: {
    borderRadius: 15,
    width: 300,
    height: 200,
    margin: 10,
  },
};

const ImageSlider = ({ images }) => {
  return (
    <ScrollView horizontal style={{ marginTop: 20 }}>
      {images.map((image, index) => (
        <Image key={index} style={slider.image} source={{ uri: image }} />
      ))}
    </ScrollView>
  );
};

export default ImageSlider;
