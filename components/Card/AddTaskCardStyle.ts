import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAFB',
    },
    containerX: {
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: "#fff"
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      height: 85,
      backgroundColor: "#6D28D9",
      width: "100%",
      padding: "5%"
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      marginRight: "35%"
    },
    textContainer: {
      justifyContent: "flex-start",
      width: "100%",
      height: 100,
      position: "static",
      flexDirection: "column",
      padding: 12,
      marginBottom: "-5%"
    },
    input: {
      borderWidth: 2,
      borderColor: '#E5E7EB',
      borderRadius: 6,
      padding: 13,
      backgroundColor: '#fff',
      fontSize: 17,
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      position: "static",
      width: "60%",
      height: "20%",
      alignItems: "center",
      padding: 12,
      marginBottom: "-8%"
    },
    categoryButton: {
      backgroundColor: '#6D28D9',
      padding: 20,
      borderRadius: 100,
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 5,
      marginLeft: "15%",
      height:"16%"
    },
    datetimeContainer: {
      position: "static",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    dateContainer: {
      position: "static",
      display: "flex",
      flexDirection: "column",
      padding: 12
    },
    dateInput: {
      position: "static",
      alignSelf: "stretch",
      borderWidth: 2,
      borderColor: '#E5E7EB',
      borderRadius: 6,
      padding: 13,
      backgroundColor: '#fff',
      fontSize: 17,
      width: "260%"
    },
    timeContainer: {
      position: "static",
      flexDirection: "column",
      padding: 12,
      marginLeft: "26%"
    },
    timeInput: {
      position: "static",
      alignSelf: "stretch",
      borderWidth: 2,
      borderColor: '#E5E7EB',
      borderRadius: 6,
      padding: 13,
      backgroundColor: '#fff',
      fontSize: 17,
      width: "260%",
    },
    noteContainer: {
      position: "static",
      flexDirection: "column",
      padding: 12,
      width: "100%",
    },
    note: {
      position: "static",
      borderWidth: 2,
      borderColor: '#E5E7EB',
      borderRadius: 6,
      padding: 13,
      backgroundColor: '#fff',
      fontSize: 17,
      height: "40%",
      alignItems: "flex-start",
    },
    btnContainer: {
      position: "relative",
      display: "flex",
      width: "95%",
      alignSelf: "center",
      marginTop: "-19%"
    },
    button: {
      backgroundColor: '#6D28D9',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 100,
      alignItems: "center",
      fontSize: 19
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
    },

  });
  

  