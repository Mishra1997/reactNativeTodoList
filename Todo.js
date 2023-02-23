import { StyleSheet } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

export const classname = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#E8EAED",
    backgroundColor:"#F9AA33"
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    // marginLeft:60
  },
  items: {color:'white'},
  inputsection: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "white",
    color:'black',
    backgroundColor:'white',
    borderRadius:8,
    height:45,
    paddingLeft:10,
    
    flex:1
    
  },
  addButton: {
  

    borderColor:'red',
    height:50,
    backgroundColor:'white',
    borderRadius:50,
    width:50,
    
    zIndex:1,
    marginTop:8,
    marginLeft:5
    
  },
  showitems:{
    color:'white',
    backgroundColor:'white',
    marginTop:10,
    height:45,
    border:2,
    borderRadius:8,
    paddingLeft:10,
    // textAlignVertical:100
    paddingTop:12
    
    
  },
  textbuttonsection:{
    display:'flex',
    flexDirection: 'row'
  },
  plusB:{
    marginLeft:16,
    marginTop:6,
    fontSize:30,
    color:'#F9AA33',
    fontWeight:'bold'
  }
});
