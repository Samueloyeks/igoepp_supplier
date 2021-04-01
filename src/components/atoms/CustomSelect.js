
import React, { useState } from "react";
import styles from './styles';
import { View, StyleSheet, Platform } from "react-native";
import RNPickerSelect from 'react-native-picker-select';



const CustomSelect = ({
    options,
    selected,
    updateSelected,
    customStyle,
    placeholder,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (

        <RNPickerSelect
            value={selected}
            fixAndroidTouchableBug={true}
            placeholder={placeholder}
            useNativeAndroidPickerStyle={true}
            style={pickerSelectStyles}
            onValueChange={(itemValue, itemIndex) => updateSelected(itemValue)}
            items={options}
        />

    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 15,
        marginHorizontal: 10,
        borderBottomWidth:0.5,
        color: 'black',
        paddingLeft: 7,
        width:'95%',
        fontFamily: 'Poppins-Regular',
        height: 50
    },
    inputAndroid: {
        fontSize: 15,
        marginHorizontal: 10,
        borderBottomWidth:0.5,
        color: 'black',
        paddingLeft: 7,
        width:'95%',
        fontFamily: 'Poppins-Regular',
        height: 50
    },
});

export default CustomSelect