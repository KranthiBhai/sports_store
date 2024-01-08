import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {Image} from '@rneui/themed';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function RelatedProducts({relatedProducts, amount, discount}) {
  const screenWidth = Dimensions.get('window').width - 40;

  const ProductsData = ({product}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={{
          width: screenWidth / 2,
          elevation: 6,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}>
          <View
            style={{
              padding: 10,
            }}>
            <Image
              source={product.img}
              style={{height: 130, width: 130}}
              resizeMode="contain"
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
              }}>
              {product.isSaved ? (
                <AntDesignIcon name="heart" size={20} color={'red'} />
              ) : (
                <AntDesignIcon name="hearto" size={20} color={'red'} />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#ededed',
              padding: 10,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <Text
              numberOfLines={2}
              style={{
                color: 'black',
                fontWeight: '700',
                marginBottom: 10,
              }}>
              {product.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  fontSize: 12,
                }}>
                ₹ {product.actualPrice}/-
              </Text>
              <Text
                style={{
                  color: 'red',
                  fontWeight: '700',
                  fontSize: 15,
                }}>
                ₹ {product.discountedPrice}/-
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        marginTop: 10,
        // backgroundColor: 'red',
        // paddingHorizontal: 10,
      }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '800',
          }}>
          Related Products
        </Text>
      </View>

      <FlatList
        data={relatedProducts}
        renderItem={({item}) => <ProductsData product={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        contentContainerStyle={{
          paddingTop: 10,
          gap: 10,
          marginBottom: 20,
          // paddingBottom: 150,
        }}
      />
    </View>
  );
}
