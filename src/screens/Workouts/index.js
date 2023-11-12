import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const Card = ({ text, imageUrl }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardContent}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <Text style={styles.cardText}>{text}</Text>
    </View>
  </View>
);

export default function App() {
  const items = [
    {
      text: 'Strength',
      imageUrl: 'URL_GAMBAR_STRENGTH',
    },
    {
      text: 'HIIT,Cardio',
      imageUrl: 'URL_GAMBAR_HIIT_CARDIO',
    },
    {
      text: 'Yoga,Streching',
      imageUrl: 'URL_GAMBAR_YOGA_STRETCHING',
    },
    {
      text: 'Warmup,Recovery',
      imageUrl: 'URL_GAMBAR_WARMUP_RECOVERY',
    },
  ];

  const [searchText, setSearchText] = useState('');

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
});
