import { FlatList, Text, View } from "react-native";

const COURSES = [
  {
    id: "1",
    code: "DCIT 301",
    title: "Operating Systems",
    credits: "3 Credits",
  },
  {
    id: "2",
    code: "DCIT 303",
    title: "Computer Networks",
    credits: "3 Credits",
  },
  {
    id: "3",
    code: "DCIT 305",
    title: "Database Fundamentals",
    credits: "3 Credits",
  },
  {
    id: "4",
    code: "DCIT 324",
    title: "Mobile Application Development",
    credits: "3 Credits",
  },
  {
    id: "5",
    code: "MATH 359",
    title: "Discrete Mathematics",
    credits: "3 Credits",
  },
  {
    id: "6",
    code: "DCIT 306",
    title: "Cloud Computing",
    credits: "3 Credits",
  },
  {
    id: "7",
    code: "DCIT 307",
    title: "Software Engineering Principles",
    credits: "3 Credits",
  },
  {
    id: "8",
    code: "DCIT 308",
    title: "Artificial Intelligence Basics",
    credits: "3 Credits",
  },
  {
    id: "9",
    code: "DCIT 309",
    title: "Web Development Fundamentals",
    credits: "3 Credits",
  },
  {
    id: "10",
    code: "DCIT 310",
    title: "Cybersecurity Essentials",
    credits: "3 Credits",
  },  
];

export default function CoursesScreen() {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderColor: "#eee",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              {item.code} - {item.title}
            </Text>
            <Text style={{ color: "#555" }}>{item.credits}</Text>
          </View>
        )}
      />
    </View>
  );
}
