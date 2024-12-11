import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Ini adalah pencarian  */}
      <TouchableOpacity style={styles.searchBar}>
        <Ionicons name="search" size={24} color="#BCCCDC" />
        <Text style={styles.searchText}>Cari Layanan banjari</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Dashboard</Text>

        {/* Top Image Section */}
        <Image
          source={require('@/assets/images/gambar.jpg')} // Replace with the internal image path
          style={styles.dashboardImage}
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AL-BANJARI MURNI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AL-BANJARI HABSYI</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.moreText}>lebih Lengkap</Text>
        </TouchableOpacity>

        {/* Horizontal Scroll Section */}
        <Text style={styles.sectionTitle}>Galeri</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
          <Image
            source={require('@/assets/images/gambar2.jpg')} // Replace with internal image paths
            style={styles.galleryImage}
          />
          <Image
            source={require('@/assets/images/gambar3.jpg')} // Replace with internal image paths
            style={styles.galleryImage}
          />
          <Image
            source={require('@/assets/images/gambar2.jpg')} // Replace with internal image paths
            style={styles.galleryImage}
          />
          <Image
            source={require('@/assets/images/gambar3.jpg')} // Replace with internal image paths
            style={styles.galleryImage}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007a34',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    marginTop: 65,
  },
  searchText: {
    color: '#BCCCDC',
    marginLeft: 8,
    fontSize: 16,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 12,
  },
  dashboardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#005623',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  moreText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 16,
  },
  imageScroll: {
    marginVertical: 5,
  },
  galleryImage: {
    width: 190,
    height: 125,
    borderRadius: 8,
    marginRight: 8,

    marginBottom: 8,
    marginLeft: 8, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
});
