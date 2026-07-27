import { FlatList, Text, View } from "react-native";

const TIMETABLE = [
  {
    id: "1",
    day: "Monday",
    time: "07:30 AM",
    course: "MATH 359",
    venue: "NNB1",
  },
  {
    id: "2",
    day: "Tuesday",
    time: "09:30 AM",
    course: "DCIT 301",
    venue: "JQB 09",
  },
  {
    id: "3",
    day: "Wednesday",
    time: "11:30 AM",
    course: "DCIT 303",
    venue: "Mathematical Sciences Lab",
  },
  {
    id: "4",
    day: "Thursday",
    time: "01:30 PM",
    course: "DCIT 324",
    venue: "Software Engineering Lab",
  },
  {
    id: "5",
    day: "Friday",
    time: "03:30 PM",
    course: "DCIT 305",
    venue: "JQB24",
  },
  {
    id: "6",
    day: "Friday",
    time: "05:30 PM",
    course: "DCIT 306",
    venue: "JQB 24",
  },
];

export default function TimetableScreen() {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={TIMETABLE}
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
              {item.day} @ {item.time}
            </Text>
            <Text>
              {item.course} — Venue: {item.venue}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
