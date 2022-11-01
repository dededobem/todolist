import styled, { css } from 'styled-components/native';

type Props = {
  selected: boolean;
};

export const Container = styled.View`
  height: 64px;
  background-color: #262626;
  border-radius: 8px;
  padding: 12px 8px 12px 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.Text<Props>`
  width: 235px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: ${(item) => (item.selected ? '#808080' : '#f2f2f2')};
  ${(item) =>
    item.selected &&
    css`
      text-decoration-line: line-through;
    `}
`;

export const Checkbox = styled.TouchableOpacity``;

export const ImageCheck = styled.Image`
  margin-right: 8px;
`;

export const TrashButton = styled.TouchableOpacity``;

export const ImageTrash = styled.Image`
  margin-left: 8px;
`;
