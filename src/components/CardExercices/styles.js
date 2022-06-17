import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
  width: 140px;
  height: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: rgba(0,0,0,0.3);
  align-self: center;
  margin: 10px;
  z-index: 99;
`;

export const CardImage = styled.Image`
  width: 110px;
  height: 110px;
  border-radius:7px;
  opacity: 100;
  position: absolute;
  align-self: center;
  margin-top: 25px;
`;

export const CartText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  bottom: 15px;
  left: 10px;
`;
