import React from 'react';
import { Button } from 'react-native-elements';
import { Colors } from '../../styles';


const CustomButton = ({ title, buttonType, buttonColor, buttonStyle,customStyle,containerStyle, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    titleStyle={{ color: buttonColor, fontSize: 16, fontFamily: 'Poppins-Regular' }}
    buttonStyle={[buttonStyle,customStyle]}
    loadingProps={{ color: Colors.WHITE }}
    containerStyle={containerStyle}
  />
)


export default CustomButton