import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Modal,Text,TextInput,Button, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore'; 
const { width, height } = Dimensions.get('window');

const Card = ({ text, imageUrl }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardContent}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <Text style={styles.cardText}>{text}</Text>
    </View>
  </View>
);
const Card2 = ({ text }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardContent}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  </View>
);


export default function App() {
  const items = [
    {
      text: 'Strength',
      imageUrl: 'https://www.healthifyme.com/blog/wp-content/uploads/2021/11/How-to-Improve-Body-Strength-Exercises-and-Nutrition.jpg',
    },
    {
      text: 'HIIT,Cardio',
      imageUrl: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/08/16063337/4-gerakan-hiit-cardio-untuk-bakar-lemak-tubuh-halodoc.jpg.webp',
    },
    {
      text: 'Yoga,Streching',
      imageUrl: 'https://cdn0-production-images-kly.akamaized.net/D5iJKVYEJTJhWUd_9p2KilNOI-U=/640x853/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3645497/original/078735500_1637935690-Wheel_Yoga1.jpg',
    },
    {
      text: 'Warmup,Recovery',
      imageUrl: 'https://img.freepik.com/premium-photo/black-woman-arm-stretching-fitness-workout-training-muscle-recovery-pain-relief-healthcare-wellness-portrait-runner-sports-athlete-warm-up-exercise-marathon-running-goals_590464-109959.jpg?w=826',
    },
  ];
  const navigation = useNavigation();
  const [customWorkouts, setCustomWorkouts] = useState([]);
  const [updatedData, setUpdatedData] = useState({ nama: '' });
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updatedNama, setUpdatedNama] = useState('');

  useEffect(() => {
    // Mengambil data dari Firestore saat komponen di-mount
    const fetchData = async () => {
      try {
        const snapshot = await firestore().collection('workouts').get();
        const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCustomWorkouts(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (itemId) => {
    // Hapus item dari Firestore berdasarkan ID
    try {
      await firestore().collection('workouts').doc(itemId).delete();
      setCustomWorkouts(customWorkouts.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleSave = async () => {
    const itemId = selectedItemId;

    try {
      await firestore().collection('workouts').doc(itemId).update({ nama: updatedNama });
      setCustomWorkouts(
        customWorkouts.map((item) => (item.id === itemId ? { ...item, nama: updatedNama } : item))
      );
      setShowModal(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  const handleUpdatePress = (itemId, nama) => {
    setSelectedItemId(itemId);
    setUpdatedNama(nama);
    setShowModal(true);
  };
  const handleCustomWorkoutsPress = () => {
    navigation.navigate('AddWorkouts');
  };


  return (
    <View style={[styles.container, { height }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workouts</Text>
        <Icon name="bars" size={34} color="black" />
      </View>
      <ScrollView>
        {items.map((item, index) => (
          <Card key={index} text={item.text} imageUrl={item.imageUrl} />
        ))}
         <TouchableOpacity onPress={handleCustomWorkoutsPress}>
         {customWorkouts.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleUpdatePress(item.id, item.nama)}>
            <View style={styles.customCardContainer}>
              <Card2 text={item.nama} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.updateButton]}
                  onPress={() => handleUpdatePress(item.id, item.nama)}
                >
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}

<Modal visible={showModal} transparent={true} animationType="slide">
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text>Update Nama</Text>
      <TextInput
        style={styles.input}
        value={updatedNama}
        onChangeText={(text) => setUpdatedNama(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => setShowModal(false)}>
        <Text style={styles.buttonText}>Batal</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


      <View style={styles.cardfoter}>
      <View style={styles.cardFooterContent}>
        <View style={styles.textContainer}>
          <Text style={styles.customWorkoutsText}>Custom Workouts</Text>
          <Text style={styles.customWorkoutsDescription}>
            Create your own with our workout builder!
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="arrow-right" size={34} color="black" />
        </View>
      </View>
      
    </View>
    </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4065de',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  cardContent: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  cardImage: {
    width: 100, 
    height: 100, 
    marginRight: 10, 
  },
  cardText: {
    fontSize: 18,
    fontWeight:'bold',
  },
  cardfoter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  cardFooterContent: {
    flexDirection: 'row', // Teks dan ikon akan bersebelahan
    alignItems: 'center',
    justifyContent: 'space-between', // Teks dan ikon akan berada di sebelah kanan
  },
  textContainer: {
    flex: 4, // 80% lebar untuk teks
  },
  iconContainer: {
    flex: 1, // 20% lebar untuk ikon
  },
  customWorkoutsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  customWorkoutsDescription: {
    fontSize: 14,
    color: 'black',
  },
  customCardContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 8,
    width: '48%',
  },
  updateButton: {
    backgroundColor: 'green',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    height: '50%',
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 8,
    width: '48%',
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 8,
    width: '48%',
  },
  
});
