import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { getPhotos } from './PhotoViewerController';

export default class PhotoViewerContainer extends Component {

  componentDidMount = () => {
    getPhotos('people', 1, (error, response) => {
        if ( error ){
            console.log('error ', error);
        }

        if ( response ){
            console.log('response', response);
        }
    });
  }

  render() {
    return (
      <View>
        <Text> PhotoViewerContainer </Text>
      </View>
    )
  }
}
