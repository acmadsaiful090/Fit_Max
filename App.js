import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, ScrollView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const slider = StyleSheet.create({
  image: {width: 250,height: 150,marginHorizontal: 10,borderRadius: 20,resizeMode: 'contain'}
})


export default function App() {
  return (
    <ScrollView style={[styles.container, { height }]}>
      <View style={styles.cardContainer}>
        <View style={styles.searchContainer}>
        <Icon name="search" size={20} style={[styles.searchIcon, { color: 'black' }]}/>
          <TextInput
            style={styles.input}
            placeholder="Cari layanan, Makanan, Uang & Top Up..."
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
        <Image style={styles.imageContainer} source={{uri: 'https://fitpage.in/wp-content/uploads/2021/04/Article_Banner-1-1-2.jpg'}} resizeMode="cover"></Image>
      </View>
      </View>
    <View style={styles.card}>
    <View style={styles.row}>
    <View style={styles.item}>
      <Image source={{uri: 'https://www.shape.com/thmb/qr6AnPByfid8VTqqv9nrKgJOUr0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-cardio-exercises-promo-2000-498cbfb8f07541b78572bf810e7fb600.jpg'}} style={styles.image} />
      <Text style={styles.itemText}>Cardio</Text>
    </View>
    <View style={styles.item}>
      <Image source={{uri: 'https://www.healthifyme.com/blog/wp-content/uploads/2021/11/How-to-Improve-Body-Strength-Exercises-and-Nutrition.jpg'}} style={styles.image} />
      <Text style={styles.itemText}>Strength </Text>
    </View>
    <View style={styles.item}>
      <Image source={{uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*SBK-6uOmYfSyQYVFxBxQ5w.jpeg'}} style={styles.image} />
      <Text style={styles.itemText}>MaBodyweightrt</Text>
    </View>
    <View style={styles.item}>
      <Image source={{uri: 'https://static.scientificamerican.com/sciam/cache/file/F7AC4011-A227-4E87-B4C5CA373BE2D382_source.jpg?w=690&h=930&7CCE65EF-D3AE-4216-80148F994817305E'}} style={styles.image} />
      <Text style={styles.itemText}>HIIT</Text>
    </View>
    <View style={styles.item}>
      <Image source={{uri: 'https://cdn0-production-images-kly.akamaized.net/fTzLVp7__9ECjaC9b2fB8Z1OwCY=/0x192:1880x1251/1280x720/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3339771/original/085161800_1609745425-pexels-photo-4498220.jpeg'}} style={styles.image} />
      <Text style={styles.itemText}>Yoga </Text>
    </View>
    <View style={styles.item}>
      <Image source={{uri: 'https://aginginplace.org/wp-content/uploads/exercising-1-768x512.jpg'}} style={styles.image} />
      <Text style={styles.itemText}>Balance </Text>
    </View>
  </View>
        <ScrollView horizontal style={{marginTop: 20}}>
          <Image style={slider.image} source={{uri: 'https://cdn1-production-images-kly.akamaized.net/FJ3-i6U7Fk4NAznzDggvwOZijTA=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3258933/original/050240400_1601958570-photo-1571019613454-1cb2f99b2d8b.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://www.rsannisa.co.id/img/thumbnail/b2ab667cc5693ca00b8148a2b49150e2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://cdn.hellosehat.com/wp-content/uploads/2022/02/6f455ebf-kebugaran-jasmani.jpg?w=640&q=75'}}></Image>
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