import React, { useState } from 'react';
import { FlatList, Alert, ListRenderItem } from 'react-native';

import Logo from '../../assets/logo-todo.png';
import LogoClip from '../../assets/logo-clipboard.png';
import Plus from '../../assets/plus.png';

import { Task } from '../../components/Task';
import * as S from './styles';

export interface ITask {
  id: number;
  nameTask: string;
  selected: boolean;
}

export function Home() {
  const [listTasks, setListTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<ITask>();

  const noList = (
    <S.ViewEmptyList>
      <S.ImageLogoEmpty source={LogoClip} />
      <S.Title bold>Você ainda não tem tarefas cadastradas</S.Title>
      <S.Title>Crie tarefas e organize seus itens a fazer</S.Title>
    </S.ViewEmptyList>
  );

  const renderItem: ListRenderItem<ITask> = ({ item }) => (
    <Task
      task={{ id: item.id, nameTask: item.nameTask, selected: item.selected }}
      remove={handleRemoveTask}
      handleSelect={handleSelect}
    />
  );

  function handleAddTask() {
    setListTasks((arrayTask: any) => [...arrayTask, task]);
    setTask({ id: 0, nameTask: '', selected: false });
  }

  function handleRemoveTask(id: number) {
    Alert.alert('Remover tarefa', `Deseja realmente remover esta tarefa?`, [
      {
        text: 'Sim',
        onPress: () =>
          setListTasks((arrayTask) => arrayTask?.filter((i) => i.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  async function handleSelect(id: number) {
    setListTasks((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, selected: !obj.selected };
        }
        return obj;
      })
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Image source={Logo} />
      </S.Header>
      <S.ViewInput>
        <S.InputText
          placeholder='Adicione uma nova tarefa'
          value={task?.nameTask}
          onChangeText={(value: string) =>
            setTask({ id: Math.random(), nameTask: value, selected: false })
          }
        />
        <S.ButtonAdd onPress={handleAddTask}>
          <S.ImageBtnAdd source={Plus} />
        </S.ButtonAdd>
      </S.ViewInput>
      <S.Content>
        <S.ViewTitle>
          <S.ViewCount>
            <S.TitleCreate>Criadas</S.TitleCreate>
            <S.ViewCountTask>
              <S.TextCount>{listTasks.length}</S.TextCount>
            </S.ViewCountTask>
          </S.ViewCount>
          <S.ViewCount>
            <S.TitleFinished>Concluídas</S.TitleFinished>
            <S.ViewCountTask>
              <S.TextCount>
                {listTasks.filter((x) => x.selected === true).length}
              </S.TextCount>
            </S.ViewCountTask>
          </S.ViewCount>
        </S.ViewTitle>
        <FlatList
          data={listTasks}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={noList}
        />
      </S.Content>
    </S.Container>
  );
}
