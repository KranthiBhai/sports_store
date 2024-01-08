import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function Description({data}) {
  const [count, setCount] = useState(1);
  const [selectSize, setSelectSize] = useState('');
  const [selectColor, setSelectColor] = useState('');

  useEffect(() => {
    setSelectSize(data.size);
    setSelectColor(data.color);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        elevation: 1,
        marginBottom: 20,
      }}>
      <Text
        style={{
          fontWeight: '800',
          color: '#182822',
          fontSize: 16,
        }}>
        {data.title}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View>
          <Text
            style={{
              fontSize: 12,
            }}>
            TOTAL PAYABLE
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                fontSize: 12,
              }}>
              ₹ {data.actualPrice}/-
            </Text>
            <Text
              style={{
                color: 'red',
                fontWeight: '700',
                fontSize: 15,
              }}>
              ₹ {count * data.discountedPrice}/-
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: '#bdbfbf',
            height: 30,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              count > 1 && setCount(count - 1);
            }}
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'lightgray',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}>
            <AntDesignIcon name="minus" size={16} />
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'lightgray',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <AntDesignIcon name="plus" size={16} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 10,
          }}>
          SIZE
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: 6,
          }}>
          {data.sizes.map((size, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.4}
                onPress={() => setSelectSize(size)}>
                <View
                  style={{
                    width: 40,
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 6,
                    backgroundColor:
                      selectSize === size ? 'blue' : 'transparent',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: selectSize === size ? 'white' : 'black',
                    }}>
                    {size}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View
        style={{
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 10,
          }}>
          COLOUR
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: 6,
          }}>
          {data.colorRanges.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.4}
                onPress={() => setSelectColor(item.color)}>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    backgroundColor: item.code,
                    borderRadius: 100,
                    borderColor:
                      selectColor === item.color
                        ? 'rgba(0,0,0,0.6)'
                        : 'transparent',
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View
        style={{
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 10,
          }}>
          DETAILS
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 10,
          }}>
          {data.details}
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
        marginBottom: 5,
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          >
          <View
            style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 10,
              backgroundColor: '#162f69'
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                textAlign: 'center',
                margin: 10,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}>
              {'BUY NOW'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          >
          <LinearGradient
            // colors={['#F37130', '#FFFF00']}
            colors={['#db3c0b', '#FFFF00']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            // useAngle={true}
            // angle={45}
            // angleCenter={{x:0.5,y:0.5}}
            style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                textAlign: 'center',
                margin: 10,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}>
              {'ADD TO CART'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
