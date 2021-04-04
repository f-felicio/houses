import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const {width} = Dimensions.get('window');

export default function DetailsScreen({route, navigation}) {
  const [listFavorites, setListFavorites] = useState([]);
  const [favorited, setFavorited] = useState(false);
  const house = route.params?.card ?? null;
  useEffect(() => {
    _retrieveData().then((value) => {
      const favorites = JSON.parse(value);
      verify_bookmark(house, favorites);
      setListFavorites(favorites);
    });
  });

  async function _retrieveData() {
    try {
      var value = await AsyncStorage.getItem('favorites');
      return value;
    } catch (error) {
      console.log(error);
    }
  }

  async function _storeData(data) {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(data));
      setListFavorites(data);
    } catch (error) {
      console.log(error);
    }
  }

  function verify_bookmark(item, list) {
    const houseFind = list.find((x) => x.id === item.id);
    if (houseFind) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }

  function bookmark(data) {
    let list = listFavorites;
    const houseFind = list.find((x) => x.id === data.id);
    if (houseFind) {
      const filteredArray = list.filter((value, index, array) => {
        return value != houseFind;
      });
      list = filteredArray;
      _storeData(list);
      setFavorited(false);
    } else {
      list.push(data);
      _storeData(list);
      setFavorited(true);
    }
  }

  return (
    <DetailsContainer>
      <BtnBack
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="ios-arrow-back" size={30} color={'#fff'} />
      </BtnBack>
      <ScrollView style={{height: '100%'}}>
        <Container>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {house.photos.map((photo, index) => (
              <Image
                source={{uri: photo}}
                style={{width, height: 320}}
                key={index}
              />
            ))}
          </ScrollView>
          <ValueContainer>
            <Value> ${house.price} </Value>
          </ValueContainer>

          <CardHeader>
            <CardName> {house.address} </CardName>
            <TouchableOpacity onPress={() => bookmark(house)}>
              <FavoriteView>
                {favorited ? (
                  <Icon name="ios-heart" size={32} color={'#c93bd6'} />
                ) : (
                  <Icon name="heart-outline" size={32} color={'#c93bd6'} />
                )}
              </FavoriteView>
            </TouchableOpacity>
          </CardHeader>
          <CardLocal> {house.city} </CardLocal>
          <ContainerInfo>
            <CardInfo>
              <Icon name="ios-expand" size={36} color={'#c93bd6'} />
              <CardTxt>{house.plot}m²</CardTxt>
            </CardInfo>
            <CardInfo>
              <Icon name="ios-bed" size={36} color={'#c93bd6'} />
              <CardTxt>{house.beds} Beds</CardTxt>
            </CardInfo>
            <CardInfo>
              <Icon name="ios-water" size={36} color={'#c93bd6'} />
              <CardTxt>{house.baths} Bath</CardTxt>
            </CardInfo>
            <CardInfo>
              <Icon name="car-sport" size={36} color={'#c93bd6'} />
              <CardTxt>{house.garage} Gar</CardTxt>
            </CardInfo>
          </ContainerInfo>
          <About>
            Beautiful studio corp in park city estates. Open space, full bath,
            kitchen, closet, separate balcony overlooking the beaultiful
            courtyard, fully furnished, pet friendly...
          </About>
          <BtnDetails>
            <BtnTxt>Contact</BtnTxt>
          </BtnDetails>
        </Container>
      </ScrollView>
    </DetailsContainer>
  );
}

const BtnBack = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  elevation: 1;
  width: 30px;
  height: 30px;
  left: 15px;
  top: 35px;
`;
const DetailsContainer = styled.View`
  flex: 1;
  background: #340054;
`;

const Container = styled.View`
  height: 100%;
`;

const CardHeader = styled.View`
  padding: 0 25px 0 15px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 35px;
`;

const CardName = styled.Text`
  color: #ffccf4;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.4px;
`;

const FavoriteView = styled.View``;

const CardLocal = styled.Text`
  color: #9e9e9e;
  font-size: 13px;
  letter-spacing: 0.4px;
  margin-top: -3px;
  padding-left: 17px;
  font-weight: bold;
`;

const ValueContainer = styled.View`
  left: 10px;
  top: 300px;
  position: absolute;
  background: #84e3eb;
  border-radius: 20px;
  min-width: 180px;
  z-index: 100;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  padding: 5px;
  elevation: 5;
`;

const Value = styled.Text`
  color: #041416;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.4px;
`;

const ContainerInfo = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
  padding: 0 20px;
`;
const CardInfo = styled.View``;
const CardTxt = styled.Text`
  color: #f7f7f7;
  font-size: 14px;
`;

const About = styled.Text`
  color: #ffccf4;
  font-size: 14px;
  padding: 30px 20px;
  line-height: 21px;
  letter-spacing: 0.8px;
`;

const BtnDetails = styled.View`
  background: #c93bd6;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px;
  padding: 10px 0;
  box-shadow: 0 5px 10px rgba(0, 155, 0, 0.25);
`;

const BtnTxt = styled.Text`
  color: #f7f7f7;
  font-size: 24px;
  letter-spacing: 0.2px;
  font-weight: bold;
`;
