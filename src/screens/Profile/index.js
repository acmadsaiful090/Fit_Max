import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ImageBackground,Animated  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChartCircle,ArrowRight2,Share,HuobiToken,Forward5Seconds,Crown,Edit,Notification,Sound,Ghost } from 'iconsax-react-native';
const { width, height } = Dimensions.get('window');

export default function App() {
  const [scrollY] = useState(new Animated.Value(0)); // Gunakan state untuk mengontrol posisi scroll

  const profileOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp', 
  });

  const [fadeIn] = useState(new Animated.Value(0)); 

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000, 
      useNativeDriver: true, 
    }).start(); 
  }, []);

  return (
    <ScrollView style={[styles.container, { height }]}
    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: false,
    })}
    scrollEventThrottle={16} >
    <Animated.View style={[styles.profileContainer, { opacity: profileOpacity }]}>
      <Image
        source={{
          uri:
            'https://www.verywellmind.com/thmb/fcB45Y2_4efpRrcrkxliTqk6EmU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Jhoni Mangan Sate</Text>
    </Animated.View>
      <Animated.View style={[styles.cardContainer, { opacity: fadeIn }]}>
        <ChartCircle size="60" color="#FF8A65"/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>State</Text>
          <Text style={styles.content}>Check Your Activity and Progress</Text>
        </View>
        <ArrowRight2 size="32" color="#FF8A65"/>
      </Animated.View>
        <View style={styles.MyJourny}>
        <Text style={styles.MyTeks}>My journey</Text>
        <View style={styles.Share}>
          <Text style={styles.iconTeks}>Share</Text>
          <Share size="32" color="#FF8A65"/>
          </View>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.card}>
          <Text style={styles.cardNumber}>0</Text>
            <View style={styles.cardContent}>
            <HuobiToken size="32" color="#FF8A65"/>
              <Text style={styles.cardText}>Calories</Text>
            </View>
          </View>

          <View style={styles.card}>
          <Text style={styles.cardNumber}>456</Text>
            <View style={styles.cardContent}>
            <Crown size="32" color="#FF8A65"/>
              <Text style={styles.cardText}>workouts</Text>
            </View>
          </View>

          <View style={styles.card}>
          <Text style={styles.cardNumber}>789</Text>
            <View style={styles.cardContent}>
            <Forward5Seconds size="32" color="#FF8A65"/>
              <Text style={styles.cardText}>Minutes</Text>
            </View>
          </View>
        </View>
        <Text style={styles.setting}>Settings</Text>
        <View style={styles.cardSettingup}>
          <View style={styles.setup}>
          <Edit size="32" color="#FF8A65"/>
          <Text style={styles.cardsetText}>Edit Profile</Text>
          </View>
          <ArrowRight2 size="32" color="#FF8A65"/>
        </View>
        <View style={styles.cardSetting}>
          <View style={styles.setup}>
          <Ghost size="32" color="#FF8A65"/>
          <Text style={styles.cardsetText}>Food</Text>
          </View>
          <ArrowRight2 size="32" color="#FF8A65"/>
        </View>
        <View style={styles.cardSetting}>
          <View style={styles.setup}>
          <Notification size="32" color="#FF8A65"/>
          <Text style={styles.cardsetText}>Reminders</Text>
          </View>
          <ArrowRight2 size="32" color="#FF8A65"/>
        </View>
        <View style={styles.cardSetting}>
          <View style={styles.setup}>
          <Sound size="32" color="#FF8A65"/>
          <Text style={styles.cardsetText}>Sound</Text>
          </View>
          <ArrowRight2 size="32" color="#FF8A65"/>
        </View>
        <View style={styles.cardSettingdown}>
          <View style={styles.setup}>
          <Icon name="flag" size={32} color="#FF8A65" />
          <Text style={styles.cardsetText}>Integrations</Text>
          </View>
          <ArrowRight2 size="32" color="#FF8A65"/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4065de',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    borderRadius: 75, 
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    margin:15,
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  Share:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"rgba(255, 255, 255, 0.7)",
    borderRadius:15,
    padding:10,
  },
  MyJourny:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:20,
  },
  MyTeks:{
    fontSize:18,
    fontWeight: 'bold',
  },
  iconTeks:{
    fontSize:18,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  card: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardIcon: {
    fontSize: 30,
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
  },
  setting:{
    fontSize:18,
    fontWeight:'bold',
    margin:20,
  },
  cardSettingup: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopRightRadius:12,
    borderTopLeftRadius:12,
    margin: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSetting: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    margin: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSettingdown:{
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    margin: 2,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  setup:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardsetText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
