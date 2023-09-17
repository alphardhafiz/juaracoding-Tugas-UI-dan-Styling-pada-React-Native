import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./CardProfile.styles";
import { FontAwesome } from "@expo/vector-icons";

const CardProfileComponent = ({name}) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image style={s.avatar} source={{ uri: "https://i.pravatar.cc/300" }} />
      </View>
      <View style={s.body}>
        <Text style={s.name}>Alphard Buci</Text>
        <Text style={s.info}>Fronend Developer</Text>
        <View style={s.social}>
          <TouchableOpacity style={s.btnSocial}>
            <FontAwesome name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={s.btnSocial}>
            <FontAwesome name="linkedin-square" size={24} color="#0077b5" />
          </TouchableOpacity>
          <TouchableOpacity style={s.btnSocial}>
            <FontAwesome name="github" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardProfileComponent;

// Kotak --> Container
//
