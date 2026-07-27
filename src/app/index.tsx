import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Campus Connect</Text>
      <Text style={{ textAlign: 'center', marginBottom: 30 }}>
        Welcome to the official student portal for University of Ghana. Ready to explore your academic journey? Let's get started!
      </Text>
      <Button title="Get Started" onPress={() => router.push('/(drawer)/(tabs)/home')} />
    </View>
  );
}