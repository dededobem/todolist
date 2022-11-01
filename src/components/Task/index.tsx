import React from 'react';
import * as S from './styles';

import check from '../../assets/check.png';
import uncheck from '../../assets/uncheck.png';
import trash from '../../assets/trash.png';
import { ITask } from '../../screens/Home';

type Props = {
  task: ITask;
  remove: (id: number) => void;
  handleSelect: (id: number) => void;
};

export function Task({ task, remove, handleSelect }: Props) {
  return (
    <S.Container>
      <S.Checkbox onPress={() => handleSelect(task.id)}>
        <S.ImageCheck source={task.selected ? check : uncheck} />
      </S.Checkbox>
      <S.Description selected={task.selected}>{task.nameTask}</S.Description>
      <S.TrashButton onPress={() => remove(task.id)}>
        <S.ImageTrash source={trash} />
      </S.TrashButton>
    </S.Container>
  );
}
