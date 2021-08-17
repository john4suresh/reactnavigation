import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [name, onChangeName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const Login = () => {
    console.log(name, password);
    if (name.toLowerCase() === password) {
      navigation.navigate("Details");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="name"
        type="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        type="password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={Login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
