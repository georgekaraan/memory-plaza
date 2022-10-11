import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LogInScreen() {
  return (
    <>
      <Screen>
        <Image
          style={styles.logo}
          source={require("../assets/memory-plaza.png")}
        />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="email"
            textContentType={"emailAddress"}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="password"
            textContentType={"password"}
            secureTextEntry
          />
          <SubmitButton
            title="Login"
            styleText={{ color: colors.primary }}
            styleButton={styles.loginButton}
          />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: colors.secondary,
    borderColor: colors.light,
    width: "100%",
  },
});
