import React, { useState, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Dimensions } from 'react-native';

import { Container, ContainerImage, ProductImage } from './styles';
import { red } from 'ansi-colors';

export default function MyCarousel({ data, dataSize }) {
  const [entries, setEntries] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fdata, setFdata] = useState([]);

  useEffect(() => {
    setFdata(data);
    setEntries(dataSize);
  }, [dataSize, setFdata]);

  const renderItem = ({ item, index }) => {
    return (
      <ContainerImage>
        <ProductImage source={{ uri: item }} />
      </ContainerImage>
    );
  };

  return (
    <Container>
      <Carousel
        data={fdata || []}
        renderItem={renderItem}
        onSnapToItem={index => setActiveSlide(index)}
        sliderWidth={Dimensions.get('window').height}
        itemWidth={Dimensions.get('window').height * 0.5}
      />
      <Pagination
        dotsLength={entries}
        activeDotIndex={activeSlide}
        containerStyle={{
          paddingVertical: 0,
          height: 20,
          alignSelf: 'stretch',
          backgroundColor: '#fff',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'tomato',
        }}
        inactiveDotStyle={{ backgroundColor: '#a4a4a4' }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </Container>
  );
}
