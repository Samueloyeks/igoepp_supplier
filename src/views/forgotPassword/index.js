import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Custom, Colors } from '../../styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { userActions } from '../../store/actions';





// components 
import CustomButton from '../../components/atoms/CustomButton';
import CustomInput from '../../components/atoms/CustomInput';
import ClickableText from '../../components/atoms/ClickableText';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import SocialAuthBlock from '../../components/atoms/SocialAuthBlock';
import CustomSelect from '../../components/atoms/CustomSelect';




// svgs 


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email')
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
    forgotPassword: (data) => dispatch(userActions.forgotPassword(data)),
  };
}

class ForgotPasswordScreen extends Component {


  handleSubmit = async data => {
    const { forgotPassword } = this.props;

    if (data) {
      forgotPassword(data);
    }
  }


  render() {
    const { navigation, loading } = this.props;

    return (
      <Formik
        initialValues={{
          email: ''
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
              style={styles.customBackground}
              keyboardShouldPersistTaps='handled'>
              <Text style={[Custom.mb20]}>Submit your email to get a password reset link</Text>

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


                <CustomButton
                  title='SUBMIT'
                  buttonStyle={styles.buttonStyle}
                  containerStyle={styles.buttonContainer}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  buttonColor={Colors.WHITE}
                  loading={loading}
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
)(ForgotPasswordScreen);