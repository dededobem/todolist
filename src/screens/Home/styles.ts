import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type Props = {
  bold?: boolean;
};

type PropsTask = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: #1a1a1a;
`;

export const Header = styled.View`
  flex: 2.5;
  background-color: #0d0d0d;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 7.5;
  padding-horizontal: 24px;
  z-index: 3;
`;

export const Image = styled.Image`
  margin-top: 24px;
`;

export const ViewInput = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + 152}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: 24px;
  right: 24px;
  z-index: 99;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})`
  height: 54px;
  width: 85%;
  background-color: #262626;
  border-width: 1px;
  border-radius: 6px;
  margin-right: 4px;
  font-size: 16px;
  padding: 16px;
  color: #f2f2f2;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: #1e6f9f;
  border-width: 1px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const ImageBtnAdd = styled.ImageBackground`
  width: 16px;
  height: 16px;
`;

export const ViewTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 60px;
  margin-bottom: 20px;
`;

export const ViewCount = styled.View`
  flex-direction: row;
`;

export const TitleCreate = styled.Text`
  color: #4ea8de;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const TitleFinished = styled.Text`
  color: #8284fa;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const ViewCountTask = styled.View`
  width: 25px;
  height: 19px;
  background-color: #333333;
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

export const TextCount = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #d9d9d9;
`;

export const ViewEmptyList = styled.View`
  height: 208px;
  border-top-width: 1px;
  border-color: #333333;
  padding: 48px 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  font-size: 14px;
  font-weight: ${(item) => (item.bold ? 'bold' : 400)};
  color: #808080;
  line-height: 19.6px;
`;

export const ImageLogoEmpty = styled.Image`
  margin-bottom: 16px;
`;
