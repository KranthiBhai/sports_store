import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OctIcon from 'react-native-vector-icons/Octicons';
import {styles} from '../../styles/globalStyles';
import {Avatar, Badge} from '@rneui/themed';

export default function Shell({children}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingTop: 10,
          paddingBottom: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={[styles.flexCenter, styles.flexRow, {gap: 10}]}>
          <AntDesignIcon name="arrowleft" size={22} color={'#fff'} />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Shop
          </Text>
        </View>

        <View style={[styles.flexCenter, styles.flexRow, {gap: 18}]}>
          <AntDesignIcon name="shoppingcart" size={22} color={'#fff'} />
          <View
            style={{
              position: 'relative',
            }}>
            <OctIcon name="bell" size={18} color={'#fff'} />
            <Badge
              status="success"
              containerStyle={{position: 'absolute', top: -5, right: -5}}
            />
          </View>
          
          <TouchableOpacity activeOpacity={0.8}>
          <View style={{
            flexDirection: 'row',
            gap: 6,
            alignItems: 'center',
          }}>
            <Avatar
              size={32}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            />
            <AntDesignIcon name="caretdown" size={10} color={'#fff'} />
          </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: 180,
          width: '100%',
          backgroundColor: '#162f69',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <View style={{
        flex: 1,
      }}>
        {children}
      </View>
    </View>
  );
}
