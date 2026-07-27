import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export const EVENTS = [
  {
    id: "1",
    title: "UG Hackathon 2026",
    date: "April 10",
    description:
      "Annual 24-hour hackathon for computer science and engineering students.",
  },
  {
    id: "2",
    title: "SRC Town Hall",
    date: "April 15",
    description:
      "Open forum with the Student Representative Council executives.",
  },
  {
    id: "3",
    title: "Career Tech Expo",
    date: "April 20",
    description:
      "Meet top tech companies recruiting software engineers and interns.",
  },
  {
    id: "4",
    title: "Campus Music Fest",
    date: "May 02",
    description: "Live performances by campus musical artists and DJs.",
  },
  {
    id: "5",
    title: "Sports Gala Finals",
    date: "May 10",
    description: "Inter-hall football and athletics championship finals.",
  },
  {
    id: "6",
    title: "Alumni Networking Night",
    date: "May 15",
    description: "Connect with University of Ghana alumni in your field.",
  },
  {
    id: "7",
    title: "Research Symposium",
    date: "May 20",
    description: "Presentations of student and faculty research projects.",
  },
  {
    id: "8",
    title: "Cultural Heritage Day",
    date: "May 25",
    description:
      "Celebrate Ghanaian culture with traditional music, dance, and food.",
  },
];

export default function FeedScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(drawer)/(tabs)/home/[id]",
                params: {
                  id: item.id,
                  title: item.title,
                  date: item.date,
                  description: item.description,
                },
              })
            }
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: "#f5f5f5",
              borderRadius: 6,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.title}
            </Text>
            <Text style={{ color: "#666", marginTop: 4 }}>
              Date: {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
