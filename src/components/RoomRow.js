import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
  
// styles
import styles from '../styles/general';

function RoomRow({room, onEdit, onDelete}) {
  return (
    <View>
      <View style={styles.boxList}>
        <Text>
          {room?.name}
        </Text>
        <View style={styles.center}>
          <TouchableOpacity onPress={() => onEdit(room)}>
            <Text>
              edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(room)}>
            <Text>
              delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default RoomRow;
