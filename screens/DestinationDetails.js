/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';

const DestinationDetails = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{flex: 2}}>
        <Image
          source={images.skiVillaBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '80%',
          }}
        />
        <View
          style={
            ({
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              right: '5%',
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
            styles.shadow)
          }>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: 'space-around',
              }}>
              <Text style={{...FONTS.h3}}>Ski Villa</Text>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>

              {/* <StarReview rate={4.5} /> */}
            </View>
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={{flex: 1.5}} />
      {/* Footer */}
      <View style={{flex: 0.5}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DestinationDetails;
