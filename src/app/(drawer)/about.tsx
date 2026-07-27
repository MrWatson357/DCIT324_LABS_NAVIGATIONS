import { View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Campus Connect App</Text>
      <Text>Official navigation lab application built with Expo Router and React Native.</Text>
      <Text style={{ marginTop: 20 }}>Developed by: Samuel Watson Tettey</Text>
      <Text>Student ID: 22237616</Text>
    </View>
  );
}