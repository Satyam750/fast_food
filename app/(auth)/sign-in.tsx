import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">

      
      <View className="flex justify-center flex-row gap-2 mt-5">
        <Text className="base-regular text-gray-100">
          Don't have an account?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
