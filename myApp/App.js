import { Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, paddingTop: insets.top , backgroundColor:"yellow"}}>
      
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
