import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Custom, Colors } from '../../styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../store/actions';
import {API_DEV_URL} from '@env';




// components 
import CustomButton from '../../components/atoms/CustomButton';
import CustomInput from '../../components/atoms/CustomInput';
import ClickableText from '../../components/atoms/ClickableText';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import SocialAuthBlock from '../../components/atoms/SocialAuthBlock';




// svgs 


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required('This is a required field')
    .min(6, 'Password must have at least 6 characters ')
})



function mapStateToProps(state) {
  const loading = state.user.loading;
  const isAuthenticated = state.user.isAuthenticated;

  return {
    loading,
    isAuthenticated
  };
}


function mapDispatchToProps(dispatch) {
  return {
    login: (data) => dispatch(userActions.login(data)),
  };
}

class LoginScreen extends Component {

  constructor(props) {
    super(props);

  }

  handleSubmit = async data => {
    const { login } = this.props;

    if (data) {
      login(data);
    }
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated, navigation } = this.props;

    if (isAuthenticated !== prevProps.isAuthenticated && isAuthenticated) {
      navigation.navigate('Home')
    }
  }



  render() {
    const { navigation, loading } = this.props;

    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => { this.handleSubmit(values) }}
        validationSchema={validationSchema}
      >
        {({ handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          isSubmitting,
          touched,
          handleBlur
        }) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.customBackground}>
              <Text style={[styles.titleStyle, Custom.mb40]}>Log In.</Text>

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <CustomInput
                  name='email'
                  placeholder='Email'
                  value={values.email}
                  keyboardType='email-address'
                  onChangeText={handleChange('email')}
                  autoCapitalize='none'
                  onBlur={handleBlur('email')}
                />
                <ErrorMessage errorValue={touched.email && errors.email} />


                <CustomInput
                  placeholder='Password'
                  secureTextEntry={true}
                  name='password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  autoCapitalize='none'
                  onBlur={handleBlur('password')}
                />
                <ErrorMessage errorValue={touched.password && errors.password} />

              <CustomButton
                  title='LOG IN'
                  buttonStyle={styles.buttonStyle}
                  containerStyle={styles.buttonContainer}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  buttonColor={Colors.WHITE}
                  loading={loading}
                />

                <View style={[styles.textCenter, styles.textInline, Custom.mt20]}>
                  <Text>New User? </Text><ClickableText text='Create account' textStyle={styles.clickable} action={() => navigation.navigate('Signup')} />
                </View>
                <View style={[styles.textCenter, styles.textInline, Custom.mt20]}>
                  <Text>Forgot Password? </Text><ClickableText text='Recover password' textStyle={styles.clickable} action={() => navigation.navigate('ForgotPassword')} />
                </View>

                <SocialAuthBlock
                  // handleFacebookSubmit={this._facebookLogin}
                  // handleFacebookSubmit={facebookAuth}
                  // handleGoogleSubmit={googleAuth}
                />
              </View>
            </ScrollView>
          )}
      </Formik>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);