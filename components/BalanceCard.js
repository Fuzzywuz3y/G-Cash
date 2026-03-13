import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-paper';

export default function BalanceCard({ balance = '₱ 0.00' }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>AVAILABLE BALANCE</Text>
        <Icon source="eye" size={20} color="#fff" />
      </View>
      <Text style={styles.amount}>{balance}</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>+ Cash In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0074FF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 14,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  amount: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#E0E7FF',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#0074FF',
    fontWeight: '700',
  },
});