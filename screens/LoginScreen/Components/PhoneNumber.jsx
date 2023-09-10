import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOnChangePhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        defaultCode="US"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={handleOnChangePhoneNumber}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.phoneInputTextContainer}
        textInputStyle={styles.phoneInputTextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    

  },
  phoneInputContainer: {
    width: '80%',
  },
  phoneInputTextContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 10,
  },
  phoneInputTextInput: {
    fontSize: 16,
    color: '#000',
  },
});

export default PhoneNumber;
