import { StyleSheet, Text, Image, View } from 'react-native';

const Header = props => {
    //  Component as prop
    return <View>
        {props.children}
    </View>
}
const Logo = props => {
    return <Image style={styles.img} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
}

const MyText = props => <Text>{props.title}</Text>

function App() {
    return (
        <View style={styles.container}>
            <Header>
                <MyText title="Hello" />
                <Logo/>
            </Header>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width:50,
        height:50
    }
});

export default App;