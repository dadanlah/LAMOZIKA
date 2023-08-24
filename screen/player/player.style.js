import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    bottomControls: {
        flexDirection : "row", 
        justifyContent : "space-between",
        width : "80%"
    },
    
    iconColor:{
        color: COLORS.secondary
    }
    ,
    artworkWrapper: {
        width:300,
        height: 340,
        marginBottom : 25,
        
        shadowColor:'#000',
        shadowOffset:{
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,

        elevation: 5,

        borderRadius:15,
    },
    artwork:{
        width:"100%",
        height:"100%",
        borderRadius:15,
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        textAlign: 'center',
        color: COLORS.white
    },
    artist:{
        fontSize:16,
        fontWeight:'200',
        textAlign:'center',
        color:COLORS.white,
    },
    progressConainer:{
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection:"row"
    },
    ProgressLabelContainer:{
        width:340,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    progressLabelTxt:{
        color:"#fff",
    },
    musicControls:{
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-between',
        marginTop:15
    }

});

export const getStyles = (width) => {
    return StyleSheet.create({
        bottomContainer: {
            borderTopColor : "#393E56",
            borderTopWidth : 1,
            width : width,
            alignItems : "center",
            paddingVertical : 18,
        }
        ,
    });
  };

export default styles