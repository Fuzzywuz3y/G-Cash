import React from 'react';
import { ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import BalanceCard from '../components/BalanceCard';

const SERVICES = [
  { id: '1', title: 'Send', icon: 'send' },
  { id: '2', title: 'Load', icon: 'cash' },
  { id: '3', title: 'Transfer', icon: 'bank-transfer' },
  { id: '4', title: 'Bills', icon: 'file-document' },

  { id: '5', title: 'Borrow', icon: 'hand-coin' },
  { id: '6', title: 'GSave', icon: 'piggy-bank' },
  { id: '7', title: 'GInsure', icon: 'shield-account' },
  { id: '8', title: 'GInvest', icon: 'chart-line' },
];

const DO_MORE = [
  { id: '1', title: 'GInsure', icon: 'shield-account' },
  { id: '2', title: 'GLife', icon: 'heart' },
  { id: '3', title: 'A+ Rewards', icon: 'gift' },
  { id: '4', title: 'GForest', icon: 'leaf' },
  { id: '5', title: 'Cards', icon: 'credit-card' },
];

export default function GcashHome() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../assets/gcash-logo.png')}
              style={styles.logo}
            />

            <Text style={styles.helloText}>Hello!</Text>
          </View>

          <TouchableOpacity style={styles.helpButton} activeOpacity={0.7}>
            <Text style={styles.helpButtonText}>HELP</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* BALANCE CARD */}
      <BalanceCard balance="₱ 1,355.00" />

      {/* SERVICES CARD */}
      <View style={styles.card}>
        <FlatList
          data={SERVICES}
          keyExtractor={(item) => item.id}
          numColumns={4}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.serviceItem}>
              <Icon source={item.icon} size={30} color="#2285ff" />
              <Text style={styles.serviceText}>{item.title}</Text>
            </View>
          )}
        />

        <Text style={styles.viewAll}>View All Services</Text>
      </View>

      {/* DO MORE CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Do more with GCash!</Text>
        <FlatList
          data={DO_MORE}
          keyExtractor={(item) => item.id}
          numColumns={5}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.doMoreItem}>
              <Icon source={item.icon} size={26} color="#2285ff" />
              <Text style={styles.doMoreText}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      {/* GCASH EXCLUSIVES */}
      <Text style={styles.sectionTitle}>GCash Exclusives</Text>

      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
          }}
          style={styles.bannerImage}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FB',
  },

  contentContainer: {
    paddingBottom: 110,
  },

  headerContainer: {
    paddingTop: 28,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  logo: {
    width: 32,
    height: 32,
    marginRight: 20,
    resizeMode: 'contain',
  },

  helloText: {
    fontSize: 22,
    fontWeight: '700',
  },

  helpButton: {
    backgroundColor: '#0074FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 24,
  },

  helpButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  welcomeText: {
    marginTop: 4,
    color: '#666',
  },

  servicesContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },

  serviceItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },

  serviceText: {
    marginTop: 6,
    fontSize: 12,
  },

  doMoreItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 12,
  },

  doMoreText: {
    marginTop: 4,
    fontSize: 11,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  viewAll: {
    textAlign: 'center',
    color: '#1E64F0',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },

  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '700',
  },

  banner: {
    margin: 16,
    borderRadius: 14,
    overflow: 'hidden',
  },

  bannerImage: {
    width: '100%',
    height: 160,
  },
});