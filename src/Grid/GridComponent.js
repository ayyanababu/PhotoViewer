import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { getPhotos } from './GridController';
import GridItem from './GridItem';
import { sizes } from '@branding';

const GRIDS_PER_ROW = 3;
export default class GridComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
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

        getPhotos('people', pageNumber, (error, response) => {
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

    renderGridItem = (listItem) => {
        const gridWidth = ( sizes.width - (10 * GRIDS_PER_ROW )) / GRIDS_PER_ROW;
        return <GridItem data={listItem} itemWidth={gridWidth}/>
    }

    render() {
        const { photos, error, isLoading} = this.state;
        return (
            <View style={{flex: 1}}>
                <FlatList data={photos}
                          renderItem={(listItem) => this.renderGridItem(listItem)}
                          keyExtractor={(item, index) => `item-${index}`}
                          numColumns={GRIDS_PER_ROW}
                          onEndReached={() => this.onEndReachedOfGrid()}
                />
            </View>
        )
    }
}
