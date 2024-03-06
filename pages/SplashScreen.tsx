import { Box, Text, Image, Button, Spinner, ButtonText, ButtonIcon, Icon } from '@gluestack-ui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react'
const logo = require('../assets/logo.png')
const googleIcon = require('../assets/google.png')

const SplashScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    

    return ( 
        <LinearGradient
            colors={['#48B8E9', '#48B8E9', '#BDCDD4']}
            style={styles.container} 
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={logo} marginTop={-90} alt="Teka" w={250} h={150} objectFit='contain' />
                
                <Box position='absolute' bottom={80}>
                {isLoading ? (
                    <Spinner size="small" marginBottom={100} />
                ) : (
                    <Box>
                        <Button
                            bg={'$white'}
                            borderRadius={50}
                            onPress={() => navigation.navigate('Register')}
                        >
                            {/* <ButtonIcon as={googleIcon} /> */}
                            <Image source={googleIcon} alt={'googleIcon'} objectFit='contain' width={20} height={20} marginRight={10} />
                            <ButtonText color='$black'>Continue with google</ButtonText>
                            {/* <Text>
                                Sign in with google
                            </Text> */}
                        </Button>

                        <Text size='xs' marginTop={100} color='$white'>
                            by continue, you agree to the Terms and Privacy
                        </Text>
                    </Box>
                )}
                </Box>
            </View>
        </LinearGradient>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
