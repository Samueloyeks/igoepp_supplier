import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Custom, Colors } from '../../styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../store/actions';
import { API_DEV_URL } from '@env';





// components 
import CustomButton from '../../components/atoms/CustomButton';
import CustomInput from '../../components/atoms/CustomInput';
import ClickableText from '../../components/atoms/ClickableText';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import SocialAuthBlock from '../../components/atoms/SocialAuthBlock';
import CustomSelect from '../../components/atoms/CustomSelect';




// svgs 

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('This is a required field'),
  last_name: Yup.string()
    .required('This is a required field'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .min(11)
    .required('This is a required field'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required('This is a required field')
    .min(6, 'Password must have at least 6 characters'),
  // verify_password: Yup.string()
  //   .label('Password')
  //   .required()
  //   .min(6, 'Password must have at least 6 characters')
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
    signup: (data) => dispatch(userActions.signup(data)),
  };
}

class SignupScreen extends Component {

  state = {
    gender: 'male',
    genders: [
      { label: 'Male', value: 'M', },
      { label: 'Female', value: 'F' },
    ],
  }

  handleSubmit = async data => {
    const { signup } = this.props;
    const { gender } = this.state;

    if (!gender) {
      alert('Please complete form');
      return;
    }

    data.sex = gender

    if (data) {
      signup(data);
    }
  }

  updateGender = (gender) => {
    this.setState({ gender })
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated, navigation } = this.props;

    if (isAuthenticated !== prevProps.isAuthenticated && isAuthenticated) {
      navigation.navigate('Home')
    }
  }

  render() {
    const { navigation, loading } = this.props;
    const { gender, genders } = this.state;

    return (
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          other_name: '',
          email: '',
          phone: '',
          password: '',
          // verify_password: ''
        }}
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
              <Text style={[styles.titleStyle]}>Sign Up.</Text>

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <View style={Custom.row}>
                  <View style={{ flex: 0.5 }}>
                    <CustomInput
                      name='first_name'
                      value={values.first_name}
                      placeholder='First Name'
                      // customStyle={[Custom.mt20]}
                      onChangeText={handleChange('first_name')}
                      onBlur={handleBlur('first_name')}
                    />
                    <ErrorMessage errorValue={touched.first_name && errors.first_name} />

                  </View>

                  <View style={{ flex: 0.5 }}>
                    <CustomInput
                      name='last_name'
                      value={values.last_name}
                      placeholder='Last Name'
                      // customStyle={[Custom.mt20]}
                      onChangeText={handleChange('last_name')}
                      onBlur={handleBlur('last_name')}
                    />
                    <ErrorMessage errorValue={touched.last_name && errors.last_name} />
                  </View>
                </View>

                <CustomInput
                  name='other_name'
                  value={values.other_name}
                  placeholder='Other Name'
                  customStyle={[Custom.mt10]}
                  // keyboardType=''
                  onChangeText={handleChange('other_name')}
                  onBlur={handleBlur('other_name')}
                />
                <ErrorMessage errorValue={touched.other_name && errors.other_name} />

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

                <CustomSelect
                  options={genders}
                  selected={gender}
                  updateSelected={this.updateGender}
                  customStyle={[Custom.mb20]}
                  placeholder={{ label: 'Gender' }}
                />

                <CustomInput
                  name='phone'
                  value={values.phone}
                  placeholder='Phone Number'
                  customStyle={[Custom.mt10]}
                  keyboardType='phone-pad'
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                />
                <ErrorMessage errorValue={touched.phone && errors.phone} />

                <CustomInput
                  placeholder='Password'
                  secureTextEntry={true}
                  name='password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  autoCapitalize='none'
                  onBlur={handleBlur('password')}
                  cont
                />
                <ErrorMessage errorValue={touched.password && errors.password} />

                {/* <CustomInput
                  placeholder='Verify Password'
                  secureTextEntry={true}
                  name='verify_password'
                  value={values.verify_password}
                  onChangeText={handleChange('verify_password')}
                  autoCapitalize='none'
                  onBlur={handleBlur('verify_password')}
                />
                <ErrorMessage errorValue={touched.verify_password && errors.verify_password} /> */}

                <CustomButton
                  title='SIGN UP'
                  buttonStyle={styles.buttonStyle}
                  containerStyle={styles.buttonContainer}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  buttonColor={Colors.WHITE}
                  loading={loading}
                />

                <View style={[styles.textCenter, styles.textInline, Custom.mt20]}>
                  <Text>Have an account? </Text><ClickableText text='Login' textStyle={styles.clickable} action={() => navigation.navigate('Login')} />
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
)(SignupScreen);