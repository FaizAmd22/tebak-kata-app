import { Box, Text, Image, Button, ButtonText } from '@gluestack-ui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const logo = require('../assets/logo2.png')
const diamond = require('../assets/diamond.png')

const Home = ({ navigation }) => {
    return ( 
        <LinearGradient
            colors={['#48B8E9', '#48B8E9', '#BDCDD4']}
            style={styles.container} 
        >
            <Box width='100%' px={30} position='absolute' display='flex' flexDirection='row' justifyContent='space-between' top={70} >
                <Image source={logo} alt={"teka"} width={50} height={20} objectFit={'contain'} />

                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Image source={diamond} position='relative' zIndex={10} alt={"teka"} width={20} height={20} objectFit={'contain'} marginRight={-10} />

                    <Box width={100} height={20} bg='#ffffffce' display='flex' justifyContent='center' alignItems='center'>
                        <ButtonText color='$black' fontWeight={'bold'}>50</ButtonText>
                    </Box>

                    <Button width={15} height={26} margin='auto'>
                        <ButtonText color='$black' fontWeight={'bold'}>+</ButtonText>
                    </Button>
                </Box>
            </Box>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    bg={'$white'}
                    borderRadius={50}
                    onPress={() => navigation.navigate('Home')}
                >
                    <ButtonText color='$black'>50</ButtonText>
                </Button>
            </View>
        </LinearGradient>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
