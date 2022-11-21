import { StyleSheet, Text, View } from 'react-native';

//Greeter Component
export const Greeter = props => {
    const { title } = props;
    // return <View style={styles.container}>
    //     <Text style={styles.header}>Greeter Component</Text>
    //     {/* inline style */}
    //     <Text style={{ color: 'red' }}>{title}</Text>
    // </View>
    return <View style={container}>
        <Text style={header}>Greeter Component</Text>
        {/* inline style */}
        <Text style={{ color: 'red' }}>{title}</Text>
    </View>
}
Greeter.defaultProps = {
    title: 'Welcome'
}

//external style object 
// const styles = StyleSheet.create({
//     backgroundColor: 'yellow'
// })
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'yellow'
//     },
//     header: {
//         fontWeight: 'bold',
//         fontFamily: 'Helvetica'
//     }
// })
const { container, header } = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    },
    header: {
        fontSize: 50,
        color: "blue",
    }

})
