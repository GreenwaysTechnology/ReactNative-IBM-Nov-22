
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



//create Stack Object
const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen = props => {
    const { navigation, route } = props;

    //DidMount,DidUpdate
    useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Create post"
            onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
}
const CreatePostScreen = (props) => {
    const { navigation, route } = props;

    const [postText, setPostText] = useState('');

    return (<View style={styles.container}>
        <TextInput
            multiline
            placeholder="What's on your mind?"
            style={{ height: 200, padding: 10, backgroundColor: 'green' }}
            value={postText}
            onChangeText={setPostText}
        />
        <Button
            title="Done"
            onPress={() => {
                // Pass params back to home screen
                navigation.navigate('Home', { post: postText });
            }}
        />
    </View>
    );
}

const App = () => {
    return <NavigationContainer>
        <Navigator initialRouteName='Home'>
            <Screen name="Home" component={HomeScreen} options={{ title: 'PostMaster' }} />
            <Screen component={CreatePostScreen} name="CreatePost" />
        </Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default App;