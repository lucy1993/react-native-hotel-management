import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, View } from 'react-native';
// styles
import styles from '../styles/general';


function Piker({data, onPikerData, onModal, currentMonth }) {
  const [selectedLanguage, setSelectedLanguage] = useState(currentMonth);

  useEffect(() => {
  },[currentMonth])

  const handlePiker = (itemValue, itemIndex) => {
    setSelectedLanguage(itemValue)
    onPikerData(itemValue, itemIndex)
  }
   return (
     <View style={styles.pikerWrapper}>
      <Picker
        style={styles.pikerAlight}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => handlePiker(itemValue, itemIndex)}>
          {data?.length && data.map(row => <Picker.Item label={row} value={row} />)}
      </Picker>
      <Button 
        title='save'
        style={styles.pickerButton}
        onPress={onModal}
      />
     </View>

  );
}

export default Piker;