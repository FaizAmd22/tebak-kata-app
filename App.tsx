import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { LinearGradient } from 'expo-linear-gradient';
import Example from './component/example';


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box style={styles.container}>
        <LinearGradient
          colors={['#48B8E9', '#48B8E9', '#BDCDD4']}
          style={styles.container} 
        >
          <Text style={styles.text}>Open up App.js to start working on your app!</Text>

          <Text style={styles.text}>Open up App.js to start working on your app!</Text>

          <Example />

        </LinearGradient>
      </Box>

      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
