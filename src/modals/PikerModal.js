import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// styles
import styles from '../styles/general';


function PikerModal({ modalVisible, data, onPikerData, onModal, currentMonth }) {
  const [selectedLanguage, setSelectedLanguage] = useState(currentMonth);

  useEffect(() => {
  },[currentMonth])

  const handlePiker = (itemValue, itemIndex) => {
    setSelectedLanguage(itemValue)
    onPikerData(itemValue, itemIndex)
  }

  return (
    <SafeAreaView>
      <Modal
        animationType="center"
        visible={modalVisible}
      >
        <View style={styles.pikerWrapper}>
          <Picker
            style={styles.pikerAlight}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => handlePiker(itemValue, itemIndex)}>
              {data && data.map(row => <Picker.Item label={row?.name || row} value={row?.id || row} />)}
          </Picker>
          <Button 
            title='save'
            style={styles.pickerButton}
            onPress={onModal}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default PikerModal;