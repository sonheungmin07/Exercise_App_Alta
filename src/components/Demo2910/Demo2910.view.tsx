import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './Demo2910.style';
const Demo2910 = () => {
  const [opacity, setOpacity] = useState<number>(0.5);
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const handlePress = () => {
    if (opacity >= 1) {
      setOpacity(0.5);
    } else {
      setOpacity(prev => prev + 0.1);
    }
  };

  const toNewYearDayNumber = async (): Promise<number> => {
    return new Promise(resolve => {
      const today = new Date();
      console.log(today.getMonth());
      const enDate = new Date((today.getFullYear() + 1).toString() + '-01-01');
      //const enDate = new Date('2024-12-03');
      const enDatetoMilisecond = enDate.getTime();
      const todaytoMilisecond = today.getTime();
      console.log(
        (enDatetoMilisecond - todaytoMilisecond) / (1000 * 60 * 60 * 24),
      );

      resolve(
        Math.floor(
          (enDatetoMilisecond - todaytoMilisecond) / (1000 * 60 * 60 * 24),
        ),
      );
    });
  };

  useEffect(() => {
    async function getValue() {
      let value: number = await toNewYearDayNumber();
      setResult(value);
    }
    getValue();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/flower1.jpg')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View
          style={[
            styles.overlay,
            {backgroundColor: `rgba(0, 0, 0, ${opacity})`},
          ]}>
          <View>
            <Text style={styles.label}>Enter the value: </Text>
            <TextInput
              value={value}
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={text => setValue(text)}
            />
            <Text style={styles.label}>Total: {Number(value) * result}</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                handlePress();
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Change opacity</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Hello world</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Demo2910;
