import { View, Text, ScrollView } from 'react-native';

export default function HelpScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <View style={{ gap: 15 }}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Q: How do I change my registered courses?</Text>
          <Text>A: Visit the academic portal during the course add/drop period.</Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold' }}>Q: How do I reset my student portal password?</Text>
          <Text>A: Click "Forgot Password" on the main login screen or visit the IT Helpdesk.</Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold' }}>Q: Who do I contact for exam issues?</Text>
          <Text>A: Reach out to your department administrator or the Academic Affairs unit.</Text>
        </View>
      </View>
    </ScrollView>
  );
}