import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },

  subcontainer: {
    backgroundColor: '#000',
    flex: 1,
    marginTop: 10,
    gap: 5,
  },
  subcontainer1: {
    backgroundColor: '#000',
    flex: 2,
    marginTop: 10,
    gap: 18,
  },

  item: {
    backgroundColor: '#fff',
    // flex: 1,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    // justifyContent: 'space-between',
  },
  item1: {
    backgroundColor: '#fff',
    aspectRatio: 2 / 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    // justifyContent: 'space-between',
  },

  //

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 10,
  },

  row1: {
    flexDirection: 'row',
  },
});
