import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { getPhotos } from './PhotoViewerController';
import Grid from '../Grid/GridComponent';
import { colors } from '@branding/';
import URI from 'urijs';

export default class PhotoViewerContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: 'mountains',
      photos: [],
      error: '',
      isLoading: false,
      pageNumber: 1
    }
  }

    componentDidMount = () => {
        const { pageNumber } = this.state;
        this.setState({
            isLoading: true,
        });
        this.getData(pageNumber);
    }

    getData = (pageNumber) => {
        const { query } = this.state;
        getPhotos(query, pageNumber, (error, response) => {
            if ( error ){
                this.setState({
                    error,
                    isLoading: false,
                })
            }
            if ( response ){
                const { photos } = this.state;
                this.setState({
                    photos: [...photos, ...response],
                    isLoading: false
                })
            }
        });
    }

  onEndReachedOfGrid = () => {
      const { pageNumber } = this.state;
      let paginatedNumber = pageNumber + 1;
      this.setState({
          pageNumber: paginatedNumber,
          isLoading: true,
      })
       this.getData(paginatedNumber);
  }

  onSearch = (value) => {
    const pageNumber = 1;
    this.setState({
      query: URI.encode(value),
      pageNumber,
      photos:[],
    }, () => {
      const { pageNumber } = this.state;
      this.getData(pageNumber);
    })
  }

  render() {
    const { photos = []} = this.state;
    return (
      <View style={styles.container}>
       <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.onSearch(text)}
          placeholder={'Search for photos'}
          clearButtonMode={'always'}
          returnKeyType={'search'}/>
        <Grid data={photos} onEndReachedOfGrid={this.onEndReachedOfGrid}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle:{
    height: 35,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 13,
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 5,
  }
})

