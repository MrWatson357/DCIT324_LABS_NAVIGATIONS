import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EventDetailsScreen() {
  const router = useRouter();
  const { title, date, description } = useLocalSearchParams<{ title: string; date: string; description: string }>();

  return (
    <View style={{ flex: 1, padding: 20, gap: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 14, color: '#666' }}>Date: {date}</Text>
      <Text style={{ fontSize: 16, lineHeight: 22 }}>{description}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Back to Feed" onPress={() => router.back()} />
      </View>
    </View>
  );
}