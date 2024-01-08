import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {Image} from '@rneui/themed';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';

const url = 'https://www.kleza.io/';
const title = 'Awesome Cont';
const message = 'Please check this out.';

const options = {
  title,
  url,
  message,
};

export default function ProductImages({images, isSaved}) {
  const [save, setSave] = useState(false);

  useEffect(() => {
    setSave(isSaved);
  }, []);

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Swiper style={styles.wrapper} showsPagination={true}>
        {images.map(img => {
          return (
            <View key={img.id} style={styles.slide}>
              <Image
                source={img.path}
                style={{height: 200, width: 200}}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </Swiper>

      <View
        style={{
          position: 'absolute',
          top: 15,
          right: 20,
          backgroundColor: 'red',
          borderRadius: 6,
          paddingHorizontal: 10,
          paddingVertical: 3,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
          }}>
          SALE
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 35,
          right: 20,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={async () => {
            await share();
          }}>
          <AntDesignIcon name="sharealt" size={20} color={'blue'} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={() => setSave(!save)}>
          {save ? (
            <AntDesignIcon name="heart" size={20} color={'red'} />
          ) : (
            <AntDesignIcon name="hearto" size={20} color={'red'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
