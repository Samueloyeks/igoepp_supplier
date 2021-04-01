import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography, Custom } from '../../styles'


export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    customBackground: {
        height: '100%',
        // padding: 30,
        paddingTop:30,
        paddingLeft:30,
        paddingRight:30,
        flex: 1
    },
    content: {
        flex: 0.99
    },
    textCenter: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldText: {
        fontFamily: 'Poppins-Bold',
        color: Colors.SECONDARY
    },
    smallText: {
        fontSize: Typography.FONT_SIZE_8
    },
    bottom: {
        flex: 0.01,
        alignItems:'center',
        justifyContent: 'flex-end',
        textAlign:'center',
        backgroundColor:Colors.CUSTOMBACKGROUND,
        padding:10
    },
    overlay:{
        zIndex:1,
        backgroundColor:'transparent',
        flex:1,
        position:'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
