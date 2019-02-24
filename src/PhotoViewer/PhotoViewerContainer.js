import React, { Component } from 'react'
import { View } from 'react-native'
import Grid from '../Grid/GridComponent';

export default class PhotoViewerContainer extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Grid />
      </View>
    )
  }
}
