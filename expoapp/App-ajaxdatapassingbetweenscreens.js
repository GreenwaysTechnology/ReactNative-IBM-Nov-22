import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, FlatList, StatusBar, Button, ActivityIndicator, StyleSheet, Alert } from 'react-native';

//create Object By calling createNativeStackNavigator function 
const { Navigator, Screen } = createNativeStackNavigator()

export const HomeScreen = props => {
    const { navigation } = props;
    const moveToScreen = () => {
        navigation.navigate('Post')
    }
    return <View style={styles.container}>
        <Button title="Post" onPress={moveToScreen} />
    </View>
}
HomeScreen.defaultProps = {
    title: ''
}

export const PostDetailsScreen = props => {
    const { navigation, route: { params: { item } } } = props;
    console.log(item)
    return <View style={styles.container}>
        <Text>{
            JSON.stringify(item)
        }</Text>
    </View>
}

export const PostScreen = props => {

    const { navigation } = props;

    const [posts, setPosts] = useState({
        error: null, // if any ajax error
        isLoaded: false, //Progress bar enabler
        items: []  // data to be filed
    })

    //componentDid == useEffect 
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                setTimeout(() => {
                    setPosts(prvState => {
                        return { ...prvState, isLoaded: true, items: posts }
                    });
                }, 0)

            }, (error) => {
                setPosts({
                    isLoaded: true,
                    error
                });
            })

    }, [])


    const onPressItem = item => {
        navigation.navigate('PostDetails', { item: item })
    }
    //use object destructuring
    const { error, items, isLoaded } = posts;

    if (error) {
        //render error component
        return <View style={styles.error}> Error: {error.message}</View>;
    } else if (!isLoaded) {
        return <View style={styles.loader}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>;
    } else {
        return <View styles={styles.container}>
            <FlatList
                keyExtractor={(post) => {
                    return post.id
                }}
                data={items}
                renderItem={
                    ({ item }) => {
                        const { title } = item
                        return <View style={styles.item}>
                            <Text onPress={() => { onPressItem(item) }} style={styles.title}>{title}</Text>
                        </View>
                    }
                }
            />
        </View>
    }

}





const App = () => {
    return <NavigationContainer>
        <Navigator initialRouteName='Home'>
            <Screen name="Home" options={{ title: 'Post Application' }}>
                {props => {
                    return <HomeScreen {...props} />
                }}
            </Screen>
            <Screen name="Post" component={PostScreen} />
            <Screen name="PostDetails" component={PostDetailsScreen} />
        </Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default App;