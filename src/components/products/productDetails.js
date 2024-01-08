import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProductImages from './productImages';
import Description from './description';
import RelatedProducts from './relatedProducts';

export default function ProductDetails({data}) {
    console.log(data);
  return (
    <View style={{
        flex: 1,
    }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
            <View style={{
                paddingHorizontal: 15,
            }}>
                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 30,
                    // padding: 20,
                    height: 250,
                    elevation: 10,
                    marginBottom: 10,
                }}>
                    <ProductImages images={data?.images} isSaved={data.isSaved} />
                </View>
                <Description data={data} />
                <RelatedProducts relatedProducts={data.relatedProducts} />
            </View>
      </ScrollView>
    </View>
  )
}