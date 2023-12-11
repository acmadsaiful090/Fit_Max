import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Import firestore from @react-native-firebase/firestore

const WorkoutInput = () => {
  const [workoutName, setWorkoutName] = useState('');

  const handleWorkoutSubmit = () => {
    // Tambahkan data workoutName ke Firestore
    firestore()
      .collection('workouts') // Ganti 'workouts' dengan nama koleksi yang Anda inginkan
      .add({
        nama: workoutName,
      })
      .then(() => {
        console.log('Data berhasil ditambahkan ke Firestore!');
        // Tambahkan logika lain yang diperlukan setelah menambahkan data ke Firestore
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Masukkan Nama Latihan:</Text>
      <TextInput
        style={styles.input}
        placeholder="Cardio, Squats, Yoga, dll."
        value={workoutName}
        onChangeText={(text) => setWorkoutName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleWorkoutSubmit}>
        <Text style={styles.buttonText}>Custom Workouts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WorkoutInput;
