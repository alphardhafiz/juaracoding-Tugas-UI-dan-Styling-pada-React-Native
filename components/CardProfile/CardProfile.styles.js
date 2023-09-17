import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "flex-start",
    padding: 30,
    shadowColor: "#000",
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 8,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  header: { flexDirection: "row" },
  body: {
    paddingLeft: 15
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 20,
  },
  social:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnSocial:{
    backgroundColor: '#eee',
    borderRadius: 40,
    padding: 10
  }
});
