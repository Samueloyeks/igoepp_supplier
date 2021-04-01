import { StyleSheet } from 'react-native';
import { Colors, Spacing, Typography, Custom } from '../../styles'

export default StyleSheet.create({
    customBackground: {
        backgroundColor: Colors.CUSTOMBACKGROUND,
        flex:1,
        // height: '100%',
        padding: 40,
        paddingTop: '30%',
    },
    titleStyle: {
        paddingVertical: Spacing.SCALE_18,
        fontSize: Typography.FONT_SIZE_28,
        color: Colors.PRIMARY,
        fontWeight:'500'
        // fontFamily: 'Poppins-Bold'
    },
    labelStyle: {
        paddingVertical: Spacing.SCALE_8,
        fontSize: Typography.LINE_HEIGHT_16,
        color: Colors.SECONDARY,
        fontFamily: 'Poppins-Bold'
    },
    buttonStyle: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom:30,
        borderRadius:0
    },
    buttonContainer:{
        width:'85%'
    },
    textCenter: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInline: {
        flexDirection: 'row'
    },
    boldText: {
        fontFamily: 'Poppins-Bold',
        color: Colors.SECONDARY
    },
    smallText: {
        fontSize: Typography.FONT_SIZE_8
    },
    clickable:{
        color:Colors.PRIMARY
    }
});
