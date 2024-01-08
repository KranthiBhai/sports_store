import { View, Text } from 'react-native'
import React from 'react'
import Shell from '../shells/shell'
import ProductDetails from './productDetails'
import { JerseyData } from '../../model/data'

export default function Products() {
  return (
    <Shell>
        <ProductDetails data={JerseyData} />
    </Shell>
  )
}