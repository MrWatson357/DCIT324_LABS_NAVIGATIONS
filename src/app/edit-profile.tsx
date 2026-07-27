import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useProfile } from '../ProfileContext';

export default function EditProfileScreen() {
  const router = useRouter();
  const { profile, setProfile } = useProfile();

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [programme, setProgramme] = useState(profile.programme);

  const handleSave = () => {
    setProfile((prev) => ({ ...prev, name, bio, programme }));
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 20, gap: 15 }}>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8 }}
      />

      <Text>Bio:</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8 }}
      />

      <Text>Programme:</Text>
      <TextInput
        value={programme}
        onChangeText={setProgramme}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8 }}
      />

      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
}
