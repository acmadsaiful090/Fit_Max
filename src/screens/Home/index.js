import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageSlider from '../../../components/ImageSlider';
import { images} from '../../../components/ImageSlider';
import { Items} from '../../../components/Items';
const { width, height } = Dimensions.get('window');
export default function App() {
const [searchText, setSearchText] = useState('');
 return (
    <ScrollView style={[styles.container, { height }]}>
      <View style={styles.cardContainer}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} style={[styles.searchIcon, { color: 'black' }]} />
          <TextInput
            style={styles.input}
            placeholder="Cari layanan, Makanan, Uang & Top Up..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.notificationIndicator}></View>
          <Icon name="user" size={40} />
        </View>
      </View>

      <View style={styles.container2}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontWeight: 'bold', fontSize: 34 }]}>Fit Max</Text>
          <Image style={styles.imageContainer} source={{ uri: 'https://fitpage.in/wp-content/uploads/2021/04/Article_Banner-1-1-2.jpg' }} resizeMode="cover"></Image>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
        {Items.map((item, index) => (
            <View style={styles.item} key={index}>
              <Image source={{ uri: item.imageUri }} style={styles.image} />
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          ))}
        </View>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          <ImageSlider images={images} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4065de',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    height: 45,
    width: '80%',
  },
  searchIcon: {
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 35,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'white', 
  },
  container2: {
    flexDirection: 'row',
    margin: 1,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  item: {
    width: width / 2 - 20, 
    backgroundColor: '#5b7ff5',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
   
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageCard: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  imageCardContent: {
    width: width,
    height: 300,
  },
});