import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class GridItem extends Component {
  render() {
    const { data, itemWidth } = this.props;
    const { item } = data;
    const { previewURL } = item;
    return (
      <View style={styles.gridItem}>
        <Image source={{uri:previewURL }}
               resizeMode={'cover'}
               style={[ styles.gridImage, { width: itemWidth}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    gridItem:{
        margin: 5,
    },
    gridImage: {
        height: 100,
    }
})
