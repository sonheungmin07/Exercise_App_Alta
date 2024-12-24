import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'blue',
    // flexWrap: 'wrap',
  },
  navList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 0,
  },
  navItem: {
    fontSize: 18,
    fontWeight: '600',
    color: 'blue',
  },
  container1: {
    flex: 4,
    backgroundColor: '#0000ff',
    flexWrap: 'wrap',
    marginTop: 50,
    // marginBottom: 50,
    // paddingHorizontal: 20,
    // paddingBottom: 30,
    // paddingTop: 20,
  },
  subcontainer: {
    // flexDirection: 'row',
    // backgroundColor: '#0000ff',
    // justifyContent: 'space-around',
    // width: '100%',
    // flexWrap: 'wrap',
    // paddingHorizontal: 20,
    // gap: 10,
    // marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    gap: 30,
    marginTop: 10,
    width: '100%',
    // marginBottom: 10,
  },
  item: {
    backgroundColor: 'aqua',
    marginTop: 30,
    aspectRatio: 1 / 1, // React Native hỗ trợ aspect-ratio
    width: '40%',
    padding: 3, // Khoảng hở bên trong box
    borderWidth: 2, // Đường viền xung quanh box
    borderColor: 'cyan',
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover', // Thay thế cho object-fit
  },
  header: {
    flex: 1,
    position: 'absolute', // Thay thế cho fixed
    top: 0,
    left: 0,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    zIndex: 1000,
    padding: 20,
  },
  footer: {
    // flex: 1,
    position: 'absolute', // Thay thế cho fixed
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1000,
    marginTop: 50,
    // height: 30,
    // padding: 10,
  },
});
