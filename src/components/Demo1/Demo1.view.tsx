import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Demo1.style';

const Demo1 = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <View style={styles.navList}>
            <Text style={styles.navItem}>Home</Text>
            {/* <Text style={styles.navItem}>Page</Text>
            <Text style={styles.navItem}>Shop</Text> */}
            <Text style={styles.navItem}>Login</Text>
          </View>
        </View>
      </View>

      {/* Nội dung chính */}
      <ScrollView style={styles.container1}>
        {/* Subcontainer 1 */}
        <View style={styles.subcontainer}>
          <View style={styles.item}>
            <Image
              source={require('../images/flower1.jpg')}
              style={styles.img}
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require('../images/flower2.jpg')}
              style={styles.img}
            />
          </View>
          {/* <View style={styles.item}>
            <Image
              source={require('../images/flower3.jpg')}
              style={styles.img}
            />
          </View> */}
        </View>

        {/* Subcontainer 2 */}
        <View style={styles.subcontainer}>
          <View style={styles.item}>
            <Image
              source={require('../images/flower3.jpg')}
              style={styles.img}
            />
          </View>
          {/* <View style={styles.item}>
            <Image
              source={require('../images/flower2.jpg')}
              style={styles.img}
            />
          </View> */}
          <View style={styles.item}>
            <Image
              source={require('../images/flower1.jpg')}
              style={styles.img}
            />
          </View>
        </View>

        {/* Subcontainer 3 */}
        <View style={styles.subcontainer}>
          <View style={styles.item}>
            <Image
              source={require('../images/flower3.jpg')}
              style={styles.img}
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require('../images/flower2.jpg')}
              style={styles.img}
            />
          </View>
          {/* <View style={styles.item}>
            <Image
              source={require('../images/flower1.jpg')}
              style={styles.img}
            />
          </View> */}
        </View>

        {/* Subcontainer 4 */}
        <View style={styles.subcontainer}>
          <View style={styles.item}>
            <Image
              source={require('../images/flower3.jpg')}
              style={styles.img}
            />
          </View>
          {/* <View style={styles.item}>
            <Image
              source={require('../images/flower2.jpg')}
              style={styles.img}
            />
          </View> */}
          <View style={styles.item}>
            <Image
              source={require('../images/flower1.jpg')}
              style={styles.img}
            />
          </View>
        </View>

        {/* Subcontainer 5 */}
        <View style={styles.subcontainer}>
          <View style={styles.item}>
            <Image
              source={require('../images/flower3.jpg')}
              style={styles.img}
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require('../images/flower2.jpg')}
              style={styles.img}
            />
          </View>
          {/* <View style={styles.item}>
            <Image
              source={require('../images/flower1.jpg')}
              style={styles.img}
            />
          </View> */}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={{color: '#0000ff', textAlign: 'center'}}>
            @Copyright to AltaSoftware
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      {/* <View style={styles.footer}>
        <Text style={{color: '#0000ff', textAlign: 'center'}}>
          @Copyright to AltaSoftware
        </Text>
      </View> */}
    </View>
  );
};

export default Demo1;
