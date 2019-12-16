import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  DepartmentContainer,
  DepartmentItem,
  DepartmentLogo,
  DepartmentImage,
  DepartmentText,
  SalesContainer,
  SalesHeader,
  SalesText,
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
  const [title, setTitle] = useState('Ofetas do dia');

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const response = await api.get('products');
      setProducts(response.data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  async function handleLoadDepartment(type) {
    setLoading(true);
    let response;
    if (type !== 'todos') {
      response = await api.get('department', {
        params: {
          q: type,
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
  }

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
              handleLoadDepartment('todos');
              setTitle('Ofertas do dia');
            }}
          >
            <DepartmentImage source={all} />
          </DepartmentLogo>
          <DepartmentText>Todos</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              handleLoadDepartment('drone');
              setTitle('Drone');
            }}
          >
            <DepartmentImage source={drone} />
          </DepartmentLogo>
          <DepartmentText>Drone</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              handleLoadDepartment('tv');
              setTitle('Tv');
            }}
          >
            <DepartmentImage source={tv} />
          </DepartmentLogo>
          <DepartmentText>TV</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              handleLoadDepartment('laptop');
              setTitle('Notebook');
            }}
          >
            <DepartmentImage source={laptop} />
          </DepartmentLogo>
          <DepartmentText>Notebook</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              handleLoadDepartment('videogames');
              setTitle('Video Games');
            }}
          >
            <DepartmentImage source={videogames} />
          </DepartmentLogo>
          <DepartmentText>Video games</DepartmentText>
        </DepartmentItem>
        <DepartmentItem>
          <DepartmentLogo
            onPress={() => {
              handleLoadDepartment('smartphone');
              setTitle('Smartphone');
            }}
          >
            <DepartmentImage source={smartphone} />
          </DepartmentLogo>
          <DepartmentText>Smarthphone</DepartmentText>
        </DepartmentItem>
      </DepartmentContainer>

      <SalesContainer>
        <SalesHeader>
          <SalesText>{title}</SalesText>
        </SalesHeader>
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

// Home.navigationOptions = {
//   tabBarLabel: <Text style={{ fontSize: 12 }}>Início</Text>,
//   tabBarIcon: props => <TabIcon name="home" {...props} />,
//   tabBarColor: `${colors.primary}`,
// };
