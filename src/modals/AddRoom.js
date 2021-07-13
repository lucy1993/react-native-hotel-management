import React, { useState, useEffect } from 'react';
// styles
import styles from '../styles/general';
import { Text, View, SafeAreaView, TouchableOpacity, Modal, TextInput } from 'react-native';

const AddRoom = ({modalVisible, onModal, roomNameInitial}) => {
  const [roomName, setRoomName] = useState('');

  const onChangeText = (e) => {
    setRoomName(e)
  }

  useEffect(() => {
    setRoomName(roomNameInitial);
  }, [roomNameInitial])

  return (
    <SafeAreaView>
      <Modal
        animationType="center"
        visible={modalVisible}
      >
        <SafeAreaView style={styles.globalModal}>
          <TouchableOpacity onPress={() => onModal(null)}>
            <Text> Close </Text>
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.headerText}> Name of the room </Text>
            <View>
              <TextInput
                style={styles.globalInput}
                onChangeText={onChangeText}
                value={roomName}
              />
            </View>
            <TouchableOpacity
              style={[styles.primaryButton, styles.center]}
              onPress={() => {
                setRoomName('')
                onModal(roomName)
              }}
            >
              <Text style={styles.wite}> Add the room </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default AddRoom;
