import React from 'react';
import { View, Text } from 'react-native';


class UserList extends React.Component {
    constructor() {
        super()
        console.log('UserList - Constructor is called')
    }
    render() {
        console.log('UserList - render is called')
        return <>
            <Text>User List</Text>
            <UserDetails/>
        </>
    }
    componentDidMount() {
        console.log('UserList - ComponentDidMount')
    }
}

class UserDetails extends React.Component {
    constructor() {
        super()
        console.log('UserDetails - Constructor is called')
    }
    render() {
        console.log('UserDetails - render is called')
        return <>
            <Text>User Details</Text>
        </>
    }
    componentDidMount() {
        console.log('UserDetails - ComponentDidMount')
    }
}


const App = () => {
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>Component Life Cycle</Text>
        <UserList />
    </View>
}

const styles = {
    container: {
        marginTop: 48,
        backgroundColor: 'pink',
        flex: 1
    },

}

export default App;