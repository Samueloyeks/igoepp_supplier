import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Custom } from '../../styles';
// import { serviceActions } from '../../store/actions';
import { Colors } from '../../styles';



function mapStateToProps(state) {

  return {

  };
}

function mapDispatchToProps(dispatch) {

  return {

  };
}


class HomeScreen extends PureComponent {

  state = {
    services: [],
    arrayholder: [],
    searchString: ''
  }

  // arrayholder = allServices



  render() {
    const { navigation, loading } = this.props;
    var { searchString, services } = this.state;

    return (
      <View style={styles.customBackground}>
        <Text>HOME</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
