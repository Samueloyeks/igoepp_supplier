import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Custom, Typography } from '../../styles';
import styles from './styles'


// svg 
import Facebook from '../../assets/svg/Facebook.svg';
import Google from '../../assets/svg/Google.svg';
import Twitter from '../../assets/svg/Twitter.svg';



const SocialAuthBlock = ({ handleFacebookSubmit, handleGoogleSubmit,handleTwitterSubmit }) => (
    <View style={[Custom.mt40]}>
        <Text style={[styles.textCenter,Custom.mb10,Typography.FONT_SIZE_12]}>OR CONNECT WITH</Text>
        <View style={[styles.socialBlock]}>
            <TouchableOpacity onPress={handleFacebookSubmit}>
                <Facebook />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTwitterSubmit}>
                <Twitter />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleGoogleSubmit}>
                <Google />
            </TouchableOpacity>
        </View>
    </View>
);


export default SocialAuthBlock;