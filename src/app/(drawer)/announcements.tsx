import { View, Text, FlatList } from 'react-native';

const ANNOUNCEMENTS = [
  { id: '1', title: 'Mid-Sem Examination Timetable Released', date: '2026-03-10', text: 'Check the portal for room assignments.' },
  { id: '2', title: 'Library Maintenance Scheduled', date: '2026-03-12', text: 'Balme Library will close early this Friday.' },
  { id: '3', title: 'Campus Wi-Fi Upgrade', date: '2026-03-15', text: 'Expect intermittent network interruptions.' },
  { id: '4', title: 'UG SRC Sports Week', date: '2026-03-18', text: 'All students are invited to register for events.' },
  { id: '5', title: 'Fee Payment Deadline Extended', date: '2026-03-25', text: 'The new deadline for late registration is next Friday.' },
  { id: '6', title: 'Guest Lecture on AI in Education', date: '2026-03-28', text: 'Join us in the Great Hall at 3 PM.' },
];

export default function AnnouncementsScreen() {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={ANNOUNCEMENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: '#666', fontSize: 12 }}>{item.date}</Text>
            <Text style={{ marginTop: 4 }}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}