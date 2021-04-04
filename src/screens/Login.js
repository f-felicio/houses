import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

Icon.loadFont();

export default function Login({navigation}) {
  const user = {
    nome: 'Felipe Felicio',
  };

  return (
    <Container
      source={{
        uri: 'https://i.redd.it/i7helehfxwb41.jpg',
      }}>
      <StatusBar barStyle={'light-content'} />
      <LogoView>
        <Logo
          source={require('../assets/logo-home.png')}
          resizeMode="contain"
        />
      </LogoView>
      <BtnView>
        <BtnSocial>
          <BtnLogin
            onPress={() => {
              navigation.navigate('Home', {
                user: user,
              });
            }}>
            <LogoGoogle
              source={require('../assets/logo-google.png')}
              resizeMode="contain"
            />
            <BtnTxtDark> Google </BtnTxtDark>
          </BtnLogin>
          <BtnLogin
            onPress={() => {
              navigation.navigate('Home', {
                user: user,
              });
            }}>
            <Icon name="logo-apple" size={24} color="#2a2b2c" />
            <BtnTxtDark> Apple </BtnTxtDark>
          </BtnLogin>
        </BtnSocial>
      </BtnView>
    </Container>
  );
}

Login.navigationOptions = {
  header: null,
};

const Container = styled.ImageBackground`
  flex: 1;
`;

const LogoView = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  width: 55%;
`;

const LogoGoogle = styled.Image`
  width: 24px;
`;

const BtnView = styled.View`
  justify-content: flex-end;
  padding: 20px 10px;
  flex: 1;
  align-items: center;
`;

const BtnTxtDark = styled.Text`
  font-size: 15px;
  color: #2b2b2b;
  padding-left: 5px;
`;

const BtnSocial = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 90%;
  align-self: center;
`;

const BtnLogin = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 25px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  width: 75%;
`;
