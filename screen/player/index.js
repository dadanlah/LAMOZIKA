import React from "react";
import { View, Text,TouchableOpacity, SafeAreaView, Dimensions,Image } from "react-native";
import styles, { getStyles }  from "./player.style";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from "../../constants";
import Slider from '@react-native-community/slider'; 





const Player = () =>{
    const navigation = useNavigation();
    const {height, width} = Dimensions.get('window');
    const stil = getStyles(width);
    return(
    <SafeAreaView style = {styles.container}>
            
            <View style = {styles.mainContainer}>
                <TouchableOpacity>
                    <View style={styles.artworkWrapper}>
                        <Image source={images.artwork} style={styles.artwork} />
                    </View>
                </TouchableOpacity>
             
             <View>
                <TouchableOpacity>
                    <Text style={styles.title}> title og the song </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.artist}> artist name </Text>
                </TouchableOpacity>
             </View>

             <View>
              

                <Slider
  style={styles.progressConainer}
  value={10}
  minimumValue={0}
  maximumValue={1}
  thumbTintColor="#FFD369"
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#fff"
  onSlidingComplete={()=>{}}
            />
                <View style={styles.ProgressLabelContainer} >
                    <Text style={styles.progressLabelTxt} >0:00</Text>
                    <Text style={styles.progressLabelTxt} >2:10</Text>
                </View>
           </View>

           <View style={styles.musicControls} >
            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="play-skip-back-outline" size={35} color="#FFD369"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="ios-pause-circle" size={35} color="#FFD369"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369"/>
            </TouchableOpacity>
            </View>   

            </View>

            <View style = {stil.bottomContainer}>
                <View style = {styles.bottomControls}>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="heart-outline" size={30} style={styles.iconColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="repeat" size={30} style={styles.iconColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="share-outline" size={30} style={styles.iconColor}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="ellipsis-horizontal" size={30} style={styles.iconColor}/>
                </TouchableOpacity>
                </View>
             
            </View>
     
     
    </SafeAreaView> 
    )
}
export default Player