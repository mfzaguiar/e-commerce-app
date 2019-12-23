import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  DepartmentContainer,
  DepartmentItem,
  DepartmentLogo,
  DepartmentImage,
  DepartmentText,
  SalesContainer,
  SpinnerLoading,
  Wrapper,
  EmptyImage,
} from './styles';

import Header from '~/components/Header';
import ProductItem from '~/components/ProductItem';
import api from '~/services/api';
import all from '~/assets/icons/online-store.png';
import drone from '~/assets/icons/drone.png';
import tv from '~/assets/icons/tv.png';
import smartphone from '~/assets/icons/smartphone.png';
import videogames from '~/assets/icons/videogames.png';
import laptop from '~/assets/icons/laptop.png';
import notfound from '~/assets/images/not-found.png';

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [department, setDepartment] = useState('todos');

  const loadProducts = useCallback(async () => {
    setLoading(true);
    const response = await api.get('products');
    setProducts(response.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useMemo(async () => {
    setLoading(true);
    let response;
    if (department !== 'todos') {
      response = await api.get('department', {
        params: {
          q: department,
          embed: 'products',
        },
      });
      const data = response.data[0].products;
      setProducts(data);
    } else {
      response = await api.get('products');
      setProducts(response.data);
    }
    setLoading(false);
  }, [department]);

  async function handleSearchSubmit(search) {
    setLoading(true);
    const response = await api.get('products', {
      params: {
        q: search,
      },
    });
    setProducts(response.data);
    setLoading(false);
  }

  return (
    <Container>
      <Header handleSearchSubmit={handleSearchSubmit} />
      <DepartmentContainer>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              setDepartment('todos');
            }}
          >
            <DepartmentImage source={all} />
          </DepartmentLogo>
          <DepartmentText>Todos</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              setDepartment('drone');
            }}
          >
            <DepartmentImage source={drone} />
          </DepartmentLogo>
          <DepartmentText>Drone</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              setDepartment('tv');
            }}
          >
            <DepartmentImage source={tv} />
          </DepartmentLogo>
          <DepartmentText>TV</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              setDepartment('laptop');
            }}
          >
            <DepartmentImage source={laptop} />
          </DepartmentLogo>
          <DepartmentText>Notebook</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              setDepartment('videogames');
            }}
          >
            <DepartmentImage source={videogames} />
          </DepartmentLogo>
          <DepartmentText>Video games</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              setDepartment('smartphone');
            }}
          >
            <DepartmentImage source={smartphone} />
          </DepartmentLogo>
          <DepartmentText>Smarthphone</DepartmentText>
        </DepartmentItem>
      </DepartmentContainer>

      <SalesContainer>
        {loading ? (
          <SpinnerLoading />
        ) : (
          <>
            {products.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <ProductItem item={item} navigation={navigation} />
                )}
              />
            ) : (
              <Wrapper>
                <EmptyImage source={notfound} />
              </Wrapper>
            )}
          </>
        )}
      </SalesContainer>
    </Container>
  );
}
