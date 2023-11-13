import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper';
import Lottie from 'lottie-react-native';
import { CallingCodePicker } from '@digieggs/rn-country-code-picker';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  wrapper: {},
  pagg: {
    display: 'flex',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 190
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6156DE'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6156DE'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6156DE'
  },
  firstpart: {
    display: 'flex',
    flex: 0.6,
    width: 300,
    height: 300,
    flexDirection: 'column'
  },
  secondpart: {
    display: 'flex',
    flex: 0.3,
    width: 250,
    flexDirection: 'column'
  },
  text: {
    color: '#ffffff',
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 700,
  },
  textbtn: {
    color: '#ffffff',
    textAlign: "center",
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: 700,
  },
  textLogin: {
    color: '#222',
    fontSize: 24,
    fontFamily: 'sans-serif',
    fontWeight: 700
  },
  btn: {
    elevation: 8,
    backgroundColor: "#6156DE",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btn1: {
    elevation: 8,
    backgroundColor: "#6156DE",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 190,
    height: 40,
    top: 40
  },
});

function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay={true} loop={false} activeDotColor={'#FFF'}
        dotStyle={{ width: 13, height: 13, borderRadius: 13 }} activeDotStyle={{ width: 13, height: 13, borderRadius: 13 }} paginationStyle={styles.pagg}>

        <View style={styles.slide1}>
          <View style={styles.firstpart}>
            <Lottie source={require('./assets/searching.json')} autoPlay loop />
          </View>
          <View style={styles.secondpart}>
            <Text style={styles.text}>Explore hundreds of discount coupons near you</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textbtn}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide2}>
          <View style={styles.firstpart}>
            <Lottie source={require('./assets/searching.json')} autoPlay loop />
          </View>
          <View style={styles.secondpart}>
            <Text style={styles.text}>Visit outlets to unlock coupons</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textbtn}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide3}>
          <View style={styles.firstpart}>
            <Lottie source={require('./assets/searching.json')} autoPlay loop />
          </View>
          <View style={styles.secondpart}>
            <Text style={styles.text}>Get best deals and save money</Text>
          </View>
          <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textbtn}>Get Started</Text>
          </TouchableOpacity>
        </View>

      </Swiper >
    </View >
  );
}

function Login({ navigation }) {
  const [number, onChangeNumber] = useState('')
  const [selectedCallingCode, setSelectedCallingCode] = useState('');

  const handleChange = number => {
    const result = number.replace(/[^0-9]/g, '');

    onChangeNumber(result);
  };

  return (
    <View style={{ backgroundColor: '#6156DE', flex: 1 }}>
      <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Image
          style={{ bottom: -30 }}
          source={require('./assets/Frame.png')}
        />
      </View >
      <KeyboardAvoidingView enabled={true} style={styles.container2}>
        <View style={{ flex: 0.2, right: 70 }}>
          <Text style={styles.textLogin}>Hello,</Text>
          <Text style={[styles.textLogin, { fontSize: 17 }]}>Sign in to your account!</Text>
        </View>
        <View style={{ flex: 0.6, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <CallingCodePicker onValueChange={callingCode => setSelectedCallingCode(callingCode)} isFlagVisible={false} />;
          <TextInput
            onChangeText={handleChange}
            value={number}
            placeholder="Phone Number*"
            keyboardType="phone-pad"
            inputMode='numeric'
            maxLength={10}
            style={{ borderColor: "#222", borderRadius: 20, borderWidth: 1, width: 200, opacity: 0.4, paddingLeft: 15, top: 17 }}
          />
          <TouchableOpacity style={styles.btn1}
            onPress={() => navigation.navigate('OTP')}
          >
            <Text style={styles.textbtn}>Generate OTP</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


