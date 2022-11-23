import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TODOS } from './mock-data/todos'


const App = () => {
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>Todo List</Text>
        <FlatList
            keyExtractor={(todo) => {
                return todo.id
            }}
            data={TODOS}
            renderItem={
                ({ item, index, separators }) => {
                    console.log(item, index, separators)
                    const { title } = item
                    return <Text>{title}</Text>
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