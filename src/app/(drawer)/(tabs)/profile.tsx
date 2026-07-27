import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useProfile } from "../../../ProfileContext";

export default function ProfileScreen() {
  const router = useRouter();
  const { profile } = useProfile();

  return (
    <View style={{ flex: 1, padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{profile.name}</Text>
      <Text style={{ fontStyle: "italic", color: "#555" }}>{profile.bio}</Text>
      <Text>Index Number: {profile.indexNumber}</Text>
      <Text>Programme: {profile.programme}</Text>
      <Text>Level: {profile.level}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Edit Profile"
          onPress={() => router.push("/edit-profile")}
        />
      </View>
    </View>
  );
}
