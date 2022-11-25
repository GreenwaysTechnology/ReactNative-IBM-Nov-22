import { React } from 'react'
import { View, StyleSheet,Text} from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Counter } from './counter/counter'

const Root = () => <Provider store={store}>
    <Counter />
</Provider>
const App = () => <View style={styles.container}>
    <Root />
</View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;