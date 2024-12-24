import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btnContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: '#0000ff',
    padding: 8,
  },
  btnText: {
    fontSize: 26,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 200,
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 24,
  },
});

export default styles;
