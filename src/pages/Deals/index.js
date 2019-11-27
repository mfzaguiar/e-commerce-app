import React from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons/';
import { formatPrice } from '~/util/format';

import {
  Container,
  ContainerGradient,
  HeaderImage,
  Title,
  ProductItem,
  ProductContent,
  LeftContent,
  ProductImage,
  RightContent,
  Description,
  PriceContainer,
  Price,
  PriceInfo,
  AddButton,
} from './styles';

import TabIcon from '~/components/TabIcon';

import bfImage from '~/assets/images/headerBlackFriday.png';

export default function Deals() {
  return (
    <ContainerGradient>
      <HeaderImage source={bfImage} />
      <Container>
        <Title>Ofertas Black Friday</Title>
        <ProductItem>
          <ProductContent>
            <LeftContent>
              <ProductImage
                source={{
                  uri:
                    'https://cdn.awsli.com.br/600x450/26/26503/produto/31963057/6bfff3df86.jpg',
                }}
              />
            </LeftContent>
            <RightContent>
              <Description>
                Drone Dji Mavic Pro Fly More Combo Cinza Cp.pt.000648 Homologado
                Pela Anatel
              </Description>
              <PriceContainer>
                <Price>
                  {formatPrice(10500)} <PriceInfo>à vista</PriceInfo>
                </Price>
                <FontAwesome name="heart" color="#737373" size={20} />
              </PriceContainer>
              <AddButton>Adicionar</AddButton>
            </RightContent>
          </ProductContent>
        </ProductItem>
        <ProductItem>
          <ProductContent>
            <LeftContent>
              <ProductImage
                source={{
                  uri:
                    'https://www.att.com/shopcms/media/att/2019/Shop/360s/1000475/6128C-2.jpg',
                }}
              />
            </LeftContent>
            <RightContent>
              <Description>
                iPhone 11 Cinza, com Tela de 6,1", 4G, 64 GB e Câmera de 12 MP -
                MWLV2BZ/A
              </Description>
              <PriceContainer>
                <Price>
                  {formatPrice(4399)} <PriceInfo>à vista</PriceInfo>
                </Price>
                <FontAwesome name="heart" color="#737373" size={20} />
              </PriceContainer>
              <AddButton>Adicionar</AddButton>
            </RightContent>
          </ProductContent>
        </ProductItem>
        <ProductItem>
          <ProductContent>
            <LeftContent>
              <ProductImage
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4ez3hI70gDrtjIt7cRLbVZvVV-1X8Jo_NcNP1iy7xQSMPPG23e4G7MJX374AoR-MyhbCTpfAZPnL5Q7zDD3Nszq-lj3JO&usqp=CAE',
                }}
              />
            </LeftContent>
            <RightContent>
              <Description>
                Console Xbox One X 1TB 4K (Golden Rush) Edição limitada com Jogo
                (Residente Evil 7)
              </Description>
              <PriceContainer>
                <Price>
                  {formatPrice(2400)} <PriceInfo>à vista</PriceInfo>
                </Price>
                <FontAwesome name="heart" color="#737373" size={20} />
              </PriceContainer>
              <AddButton>Adicionar</AddButton>
            </RightContent>
          </ProductContent>
        </ProductItem>
        <ProductItem>
          <ProductContent>
            <LeftContent>
              <ProductImage
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcReDrJWhGrBYGnA0i8pBjUifvfGmogejmTShjhqIRBp6pFa-9LmHwyoRZ67j4rEMoy5s1BW_x4tCmMIK4kSrm6XhR5QZNJGVhBCWGB5ifm8&usqp=CAE',
                }}
              />
            </LeftContent>
            <RightContent>
              <Description>
                Smartphone Samsung Galaxy S10+ 128GB Dual Chip Android 9.0 Tela
                6.4" Octa-Core 4G Câmera Tripla Traseira 12MP + 12MP + 16MP -
                Preto
              </Description>
              <PriceContainer>
                <Price>
                  {formatPrice(3374)} <PriceInfo>à vista</PriceInfo>
                </Price>
                <FontAwesome name="heart" color="#737373" size={20} />
              </PriceContainer>
              <AddButton>Adicionar</AddButton>
            </RightContent>
          </ProductContent>
        </ProductItem>
      </Container>
    </ContainerGradient>
  );
}

Deals.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 11 }}>Ofertas</Text>,
  tabBarIcon: props => <TabIcon name="tag" {...props} />,
  tabBarColor: 'rgba(0,0,0,0.9)',
};
