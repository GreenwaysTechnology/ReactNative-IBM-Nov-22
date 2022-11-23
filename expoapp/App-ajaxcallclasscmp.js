import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, StatusBar, Alert } from 'react-native';


class Todos extends React.Component {

    state = {
        error: null,
        isLoaded: false, //progress bar / spinner 
        items: [] //data
    }

    onSelectItem = item => {
        Alert.alert(JSON.stringify(item))
    }
    render() {
        const { error, isLoaded, items } = this.state
        //conditional rendering
        if (error) {
            return <View>
                <Text>Error : {error.message}</Text>
            </View>
        } else if (!isLoaded) {
            //show spinner 
            return <ActivityIndicator size="large" color="#0000ff" />
        } else {
            return <FlatList
                keyExtractor={(todo) => {
                    return todo.id
                }}
                data={items}
                renderItem={
                    ({ item }) => {
                        const { title } = item
                        return <View style={styles.item}>
                            <Text onPress={() => { this.onSelectItem(item) }} style={styles.title}>{title}</Text>
                        </View>
                    }
                }
            />
        }

    }
    componentDidMount() {
        setTimeout(() => {
            const url = 'https://jsonplaceholder.typicode.com/todos'
            fetch(url)
                .then(res => res.json())
                .then(todos => {
                    // console.log(todos)
                    this.setState({
                        isLoaded: true,
                        items: todos
                    })
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        isLoaded: true,
                        error: err
                    })
                })
        }, 100)
    }
}


const App = () => {
    return <View style={styles.container}>
        <Todos />
    </View>
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