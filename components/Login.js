import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-remix-icon';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Login() {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  console.log('Height ===>', deviceHeight);
  console.log('Width ===>', deviceWidth);

  return (
    <>
      <KeyboardAvoidingView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{minHeight: deviceHeight}}
          bounces={false}>
          <View style={styles.header}>
            <Text style={styles.headerText}>HealthLink</Text>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Login {'\n'}to your account</Text>
              <View style={styles.inputContainer}>
                <Icon
                  name="ri-mail-line"
                  size="24"
                  color="#557DE5"
                  style={{marginHorizontal: 16}}
                />
                <TextInput
                  placeholder="Enter your email"
                  style={styles.inputBox}
                  autoFocus={false}
                  cursorColor="#557DE5"
                />
              </View>

              <View style={styles.passwordInputContainer}>
                <Icon
                  name="ri-lock-line"
                  size="24"
                  color="#557DE5"
                  style={{marginHorizontal: 16}}
                />
                <TextInput
                  placeholder="Enter your password"
                  style={styles.passwordIinputBox}
                  autoFocus={false}
                  secureTextEntry
                  cursorColor="#557DE5"
                />
              </View>
              <TouchableOpacity style={styles.optContainer}>
                <Text style={styles.optText}>Resend OTP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginContainer}
                activeOpacity={0.8}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: responsiveWidth(6),
                  marginVertical: responsiveHeight(4),
                }}>
                <View
                  style={{flex: 1, height: 2, backgroundColor: '#D2D5E0'}}
                />
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginHorizontal: responsiveWidth(2),
                      fontFamily: 'Montserrat-Medium',
                      color: '#9E9292',
                    }}>
                    or login with
                  </Text>
                </View>
                <View
                  style={{flex: 1, height: 2, backgroundColor: '#D2D5E0'}}
                />
              </View>
              <View style={styles.otherLoginContainer}>
                <TouchableOpacity
                  style={styles.socialLoginBox}
                  activeOpacity={0.6}>
                  <Icon
                    name="ri-google-fill"
                    size="24"
                    color="#1877F2"
                    style={{marginHorizontal: 16}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.socialLoginBox}
                  activeOpacity={0.6}>
                  <Icon
                    name="ri-facebook-circle-fill"
                    size="24"
                    color="#1877F2"
                    style={{marginHorizontal: 16}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.socialLoginBox}
                  activeOpacity={0.6}>
                  <Icon
                    name="ri-apple-fill"
                    size="24"
                    color="#000"
                    style={{marginHorizontal: 16}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: responsiveHeight(0.1),
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: responsiveHeight(0.5),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: responsiveFontSize(1.5),
                    }}>
                    By clicking you agree
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        marginLeft: 5,
                        fontFamily: 'Montserrat-Bold',
                        fontSize: responsiveFontSize(1.5),
                        color: '#557DE5',
                      }}>
                      Terms and Conditions
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: responsiveFontSize(1.5),
                      color: '#557DE5',
                    }}>
                    & Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#557DE5',
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: responsiveFontSize(6),
    textAlign: 'center',
    marginVertical: responsiveHeight(6),
    color: '#FFF',
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: responsiveWidth(5),
    borderTopLeftRadius: responsiveWidth(5),
  },
  footerText: {
    marginHorizontal: responsiveWidth(6),
    marginVertical: responsiveHeight(5),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: responsiveFontSize(3),
    color: '#38383F',
  },
  inputContainer: {
    backgroundColor: '#E7F0FF',
    marginHorizontal: responsiveWidth(6),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
  },
  inputBox: {
    height: responsiveHeight(8),
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    color: '#38383F',
  },
  passwordInputContainer: {
    backgroundColor: '#E7F0FF',
    marginHorizontal: responsiveWidth(6),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  passwordIinputBox: {
    height: responsiveHeight(8),
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    color: '#38383F',
  },
  optContainer: {
    marginHorizontal: responsiveWidth(7),
    flexDirection: 'row-reverse',
    marginTop: responsiveHeight(1),
  },
  optText: {
    fontFamily: 'Montserrat-Medium',
    color: '#557DE5',
  },
  loginContainer: {
    marginHorizontal: responsiveWidth(6),
    backgroundColor: '#557DE5',
    height: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(3),
  },
  loginText: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFF',
    fontSize: responsiveFontSize(2),
  },
  otherLoginContainer: {
    marginHorizontal: responsiveWidth(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLoginBox: {
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.5),
    borderColor: '#D2D5E0',
  },
});
