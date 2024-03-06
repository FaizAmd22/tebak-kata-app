import { Box, Text, Image, Button } from '@gluestack-ui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const logo = require('../assets/logo.png')

const Register = ({navigation}) => {
    return ( 
        <LinearGradient
            colors={['#48B8E9', '#48B8E9', '#BDCDD4']}
            style={styles.container} 
        >
            {/* <Box>
                <Image />
            </Box> */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    bg={'$white'}
                    borderRadius={50}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>
                        .
                    </Text>
                </Button>
            </View>
        </LinearGradient>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
