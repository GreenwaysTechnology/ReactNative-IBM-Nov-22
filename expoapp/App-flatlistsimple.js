import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';


const messageList = [{
    id: 1,
    message: 'hello'
},
{
    id: 2,
    message: 'hai'
},
{
    id: 3,
    message: 'welcome'
},
{
    id: 4,
    message: 'greet'
}

]

const App = () => {
    // Try setting `flexDirection` to 'column'/'column-reverse'/'row'/'row-reverse'
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>ListView</Text>
         {/* <FlatList
            data={messageList}
            renderItem={
                (obj) => {
                    console.log(obj)
                    return <Text>{obj.item.message}</Text>
                }
            }
        /> */}
        {/* <FlatList
            data={messageList}
            renderItem={
                ({ item, index, separators }) => {
                    console.log(item, index, separators)
                    return <Text>{item.message}</Text>
                }
            }
        /> */}
        <FlatList
            keyExtractor={(message) => {
                console.log('keyExtractor', message)
                return message.id
            }}
            data={messageList}
            renderItem={
                ({ item, index, separators }) => {
                    console.log(item, index, separators)
                    const { message } = item
                    return <Text>{message}</Text>
                }
            }
        /> 
    </View>
}

const styles = {
    container: {
        marginTop: 48,
        backgroundColor: 'pink',
        flex: 1
    },
    headerStyle: {
        fontSize: 24,
        fontWeight: 'bolder',
        textAlign: 'center',
        marginBottom: 24
    },
    elementsContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
}

export default App;