import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import GridItem from './GridItem';
import { sizes } from '@branding';
import configs from '../Configs/Configurations';

const { gridsPerRow } = configs;
export default class GridComponent extends Component {

    renderGridItem = (listItem) => {
        const gridWidth = ( sizes.width - (10 * gridsPerRow )) / gridsPerRow;
        return <GridItem data={listItem} itemWidth={gridWidth}/>
    }

    render() {
        const { data = [], onEndReachedOfGrid } = this.props;
        return (
            <View style={{flex: 1}}>
                <FlatList data={data}
                    renderItem={(listItem) => this.renderGridItem(listItem)}
                    keyExtractor={(item, index) => `item-${index}`}
                    numColumns={gridsPerRow}
                    onEndReached={onEndReachedOfGrid}
                    onEndReachedThreshold={0.7}
                />
            </View>
        )
    }
}
