// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { classname } from "./Todo";

export default function App() {
  const [showdata, setshowdata] = useState([]);
  const [getinputdata, inputdata] = useState("");

  const getuserval = () => {
    Keyboard.dismiss();

    if (getinputdata === "") {
      Alert.alert("Oops !", "You ran out of ideas");
      inputdata("");
    } else {
      setshowdata([getinputdata, ...showdata]);
      inputdata("");
    }
  };

const [realvalue,setrealvalue]=useState([])

  const longpresed = () => setshowdata([]);
  const filtervalue = (data) => {
    // const data="mk";
    // alert(data);
    // showx(data)

const filteredData=showdata.filter((dataa)=>data!==dataa)
setshowdata(filteredData)
// alert(filteredData)

  };

  return (
    <View style={classname.container}>
      <View style={classname.taskWrapper}>
        <Text style={classname.sectionTitle}> Add Your Ideas </Text>

        <TouchableOpacity onPress={() => xx("mkmkmkmkmkm")}>
          <Text style={classname.sectionTitle}> </Text>
        </TouchableOpacity>
        <View style={classname.textbuttonsection}>
          <TextInput
            style={classname.inputsection}
            placeholder={"What's on your minds ?"}
            value={getinputdata}
            onChangeText={(val) => inputdata(val)}
          />

          <TouchableOpacity onPress={getuserval} onLongPress={longpresed}>
            <View style={classname.addButton}>
              <Text style={classname.plusB}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {showdata.map((data, index) => (
            <TouchableOpacity onPress={() => filtervalue(data)}>
              <View key={index} style={classname.showitems}>
                <Text>{data}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
