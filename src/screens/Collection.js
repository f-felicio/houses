import React from 'react';
import styled from 'styled-components';
import {ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HouseList} from '../db';

Icon.loadFont();

export default function CollectionScreen({route, navigation}) {
  const collection = route.params?.collection ?? null;

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <BtnBack
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="ios-arrow-back" size={30} color={'#fff'} />
      </BtnBack>
      <Container>
        <Cover>
          <Image source={collection.image} />
          <Name> {collection.name} </Name>
        </Cover>
        <About>{collection.about}</About>
        <CardsContainer>
          {HouseList.map((card, index) => (
            <Card key={index}>
              <ContainerPhoto>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {
                      card: card,
                    });
                  }}>
                  <CoverPhoto>
                    <CardNameView>
                      <CardName> {card.address} </CardName>
                    </CardNameView>
                    <ImagePhoto source={{uri: card.photos[0]}} />
                  </CoverPhoto>
                </TouchableOpacity>
              </ContainerPhoto>
              <CardValue>
                <Value> ${card.price} </Value>
              </CardValue>
              <ContainerInfo>
                <Icon
                  name="md-information-circle-outline"
                  size={20}
                  color={'#c93bd6'}
                />
                <CardInfo>
                  <CardTxt>{card.plot}m²</CardTxt>
                </CardInfo>
                <CardInfo>
                  <CardTxt>{card.beds} Beds</CardTxt>
                </CardInfo>
                <CardInfo>
                  <CardTxt>{card.baths} Bath</CardTxt>
                </CardInfo>
              </ContainerInfo>
              <CardLocal>
                <Icon name="ios-pin" size={20} color={'#c93bd6'} />
                {card.city}
              </CardLocal>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </ScrollView>
  );
}

CollectionScreen.navigationOptions = {
  header: null,
};

const BtnBack = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  elevation: 1;
  width: 30px;
  height: 30px;
  left: 15px;
  top: 35px;
`;

const Container = styled.View`
  flex: 1;
  background: #340054;
`;
const Cover = styled.View`
  height: 240px;
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Name = styled.Text`
  color: #ffccf4;
  font-size: 28px;
  font-weight: bold;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const About = styled.Text`
  color: #ffccf4;
  font-size: 15px;
  padding: 20px;
  letter-spacing: 0.2px;
  line-height: 25px;
`;

const CardsContainer = styled.View`
  flex: 1;
`;

const Card = styled.View`
  background: #4f0080;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  height: 315px;
  margin-bottom: 15px;
`;

const ContainerPhoto = styled.View`
  width: 100%;
  height: 180px;
  margin: 0 10px 20px 0;
`;

const CoverPhoto = styled.View`
  height: 180px;
  width: 100%;
`;

const ImagePhoto = styled.Image`
  width: 100%;
  height: 180px;
`;

const CardNameView = styled.View`
  left: 10px;
  top: 10px;
  position: absolute;
  background: #c93bd6;
  border-radius: 20px;
  min-width: 180px;
  z-index: 100;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  padding: 5px;
`;
const CardName = styled.Text`
  color: #600165;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
`;
const CardValue = styled.View`
  padding: 0 10px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 25px;
`;

const Value = styled.Text`
  color: #84e3eb;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2px;
`;

const ContainerInfo = styled.View`
  flex-direction: row;
  padding-left: 15px;
  align-items: center;
`;
const CardInfo = styled.View`
  margin-right: 10px;
  align-items: center;
  margin-left: 5px;
`;
const CardTxt = styled.Text`
  color: #ffccf4;
  font-size: 14px;
`;

const CardLocal = styled.Text`
  color: #ffccf4;
  font-size: 14px;
  letter-spacing: 0.2px;
  margin-top: 7px;
  padding-left: 16px;
`;
