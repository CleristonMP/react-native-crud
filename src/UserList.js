import React, {useContext} from 'react';
import {Alert, FlatList, Image, StyleSheet, View} from 'react-native';
import {Avatar, Button, ListItem} from '@rneui/themed';
import UsersContext from './context/UserContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        bottomDivider
        key={user.id}
        onPress={() => props.navigation.navigate('UserForm', user)}>
        <Avatar rounded source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button
          id="edit-button"
          type="clear"
          icon={
            <Image source={require('../assets/edit.png')} style={styles.edit} />
          }
          onPress={() => props.navigation.navigate('UserForm', user)}
        />
        <Button
          id="delete-button"
          type="clear"
          icon={
            <Image
              source={require('../assets/delete.png')}
              style={styles.delete}
            />
          }
          onPress={() => confirmUserDeletion(user)}
        />
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    width: 20,
    height: 25,
    tintColor: 'red',
  },
  edit: {
    width: 20,
    height: 25,
    tintColor: 'orange',
  },
});
