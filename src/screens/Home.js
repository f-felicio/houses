import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {HouseList, CollectionList} from '../db';
export default function HomeScreen({navigation}) {
  const [housesList, setHousesList] = useState([]);

  useEffect(() => {
    async function retrieveData() {
      try {
        const favorites_list = await AsyncStorage.getItem('favorites');
        const houses_list = await AsyncStorage.getItem('houses');
        if (favorites_list && houses_list) {
          setHousesList(JSON.parse(houses_list));
          return;
        } else {
          storeData();
        }
      } catch (error) {
        console.log(error);
      }
    }
    retrieveData();
  }, []);

  async function storeData() {
    try {
      const init_favorites = [];
      const init_houses = HouseList;
      await AsyncStorage.setItem('favorites', JSON.stringify(init_favorites));
      await AsyncStorage.setItem('houses', JSON.stringify(init_houses));
      setHousesList(init_houses);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{height: '100%'}}>
        <Container>
          <Header
            // source={require('../assets/bg-home-1.jpg')}
            source={{
              uri:
                'https://64.media.tumblr.com/82be50eab9ea4c285acb149ca611760f/tumblr_pwdupvu2aN1xc7xtzo1_1280.jpg',
            }}
            resizeMode="cover">
            <TextView>
              <LinearGradient
                colors={['#030816', '#0a0316', '#0a0316', '#220b4e']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  alignItems: 'flex-start',
                  height: 130,
                  width: '100%',
                  opacity: 0.8,
                  paddingTop: 20,
                  paddingLeft: 30,
                }}>
                <Title>Let us guide </Title>
                <Subtitle>To you dream home </Subtitle>
              </LinearGradient>
            </TextView>
          </Header>

          <CardsContainer>
            <CardsBg>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  paddingBottom: 20,
                  marginTop: -20,
                }}>
                <LinearGradient
                  colors={['#f709f3', '#6B1095']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  style={{
                    alignItems: 'center',
                    borderRadius: 8,
                    height: 60,
                    width: 170,
                    justifyContent: 'center',
                    marginLeft: 30,
                    marginRight: 10,
                  }}>
                  <CardText>Buy Property</CardText>
                </LinearGradient>

                <LinearGradient
                  colors={['#FFA500', '#F27C5F']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  style={{
                    alignItems: 'center',
                    borderRadius: 8,
                    height: 60,
                    width: 170,
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
                  <CardText>Post Property</CardText>
                </LinearGradient>
              </ScrollView>
            </CardsBg>
          </CardsContainer>
        </Container>
        <CollectionContainer>
          <CollectionTitle>Top Collection</CollectionTitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{paddingBottom: 20}}>
            {CollectionList.map((collection, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Collection', {collection: collection});
                }}>
                <CollectionCard>
                  <Cover>
                    <Image source={collection.image} />
                  </Cover>
                  <Name>{collection.name} </Name>
                </CollectionCard>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <CollectionTitle>Recently Added</CollectionTitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{paddingBottom: 20}}>
            {housesList.map((house, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Details', {
                    card: house,
                  });
                }}>
                <HouseCard>
                  <Photo source={{uri: house.photos[0]}} />
                  <Price>${house.price} </Price>
                  <CardLocal>{house.city} </CardLocal>
                </HouseCard>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </CollectionContainer>
      </ScrollView>
    </HomeContainer>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const HomeContainer = styled.View`
  flex: 1;
  background: #340054;
`;

const Header = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;
const Container = styled.View`
  height: 500px;
  position: relative;
`;

const TextView = styled.View`
  position: absolute;
  width: 100%;
  bottom: 17%;
  height: 100px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #fff;
`;

const Subtitle = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
`;

const CardsContainer = styled.View`
  flex: 1;
  z-index: 100;
  width: 100%;
  left: 0;
  top: 85%;
  position: absolute;
  background-color: transparent;
`;
const CardsBg = styled.View`
  background: #340054;
  height: 82px;
  margin-top: 20px;
`;

const CardText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
`;

const CollectionContainer = styled.View`
  padding-top: 50px;
  padding-left: 10px;
  height: 640px;
  padding-bottom: 30px;
`;

const CollectionTitle = styled.Text`
  font-size: 20px;
  color: #ffccf4;
  font-weight: 800;
`;

const CollectionCard = styled.View`
  width: 270px;
  height: 170px;
  border-radius: 14px;
  margin: 10px 20px 10px 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const Cover = styled.View`
  width: 100%;
  height: 170px;
  overflow: hidden;
  border-radius: 10px;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Name = styled.Text`
  color: #84e3eb;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.4px;
  margin-top: 10px;
  padding-left: 5px;
`;

const HouseCard = styled.View`
  width: 200px;
  height: 160px;
  border-radius: 14px;
  margin: 10px 20px 10px 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  background: transparent;
`;
const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;

const Price = styled.Text`
  color: #84e3eb;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.4px;
  margin-top: 10px;
`;
const CardLocal = styled.Text`
  color: #c93bd6;
  font-size: 12px;
  letter-spacing: 0.4px;
  margin-top: -3px;
  font-weight: bold;
  margin-top: 5px;
`;
