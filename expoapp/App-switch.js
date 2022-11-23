import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet, StatusBar, Switch } from 'react-native'

let id = 0

const styles = StyleSheet.create({
    todoContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    appContainer: {
        paddingTop: 10,
        marginTop: 20,

    },
    // Let container (ScrollView (todo container) & View (app container)) fills up all possible space
    fill: {
        flex: 1,
    }
})

export const Todo = props => (
    <View style={styles.todoContainer}>
        <Switch value={props.todo.checked} onValueChange={props.onToggle} />
        <Button onPress={props.onDelete} title="delete" />
        <Text>{props.todo.text}</Text>
    </View>
)
class App extends React.Component {
    state = {
        todos: [],
    }
    addTodo() {
        id++
        const text = `TODO number ${id}`
        this.setState({
            todos: [
                ...this.state.todos,
                { id: id, text: text, checked: false },
            ],
        })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
            })
        })
    }

    render() {
        return (
            <View style={[styles.appContainer, styles.fill]}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={"default"}
                    showHideTransition={"fade"}
                    hidden={false} />
                <Text>Todo count: {this.state.todos.length}</Text>
                <Text>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</Text>
                <Button onPress={() => this.addTodo()} title="Add TODO" />
                <ScrollView style={styles.fill}>
                    {this.state.todos.map(todo => (
                        <Todo
                            onToggle={() => this.toggleTodo(todo.id)}
                            onDelete={() => this.removeTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default App;