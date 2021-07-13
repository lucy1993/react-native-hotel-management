import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffc2be',
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  globalModal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fde4ed',
  },
  headerText: {
    fontSize: 30,
    color: '#363c64',
  },
  boxList: {
    width: '100%',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#fee3ea',
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,

  },
  primaryButton: {
    width: 200,
    height: 50,
    backgroundColor: '#442e5c',
    borderRadius: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wite: {
    color: '#fff'
  },
  globalInput: {
    height: 70,
    padding: 10,
    width: 300,
    marginTop: 30,
    marginBottom: 50,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#f8f9ff',
  },
  pikerWrapper: {
    flex: 1,
  },
  pikerAlight: {
    marginTop: '40%',
    marginBottom: '100%',
  },
  pickerButton: {
    position: 'absolute',
    bottom: 0,
  },
  chosenRows: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fde4ec',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  chosenRowsText: {
    fontSize: 20,
  },
  calendarWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 10,
  },
  calendarBox: {
    width: '14%',
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefeff',
    opacity: 0.7,
  },
  calendarBoxActive: {
    width: '14%',
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdaac5',
    opacity: 0.7,
  },
  calendarText: {
    color: '#514d72',
    fontSize: 20
  }
});

export default styles;
