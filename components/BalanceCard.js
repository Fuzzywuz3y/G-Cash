import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Text, Button, IconButton } from 'react-native-paper';

export default function BalanceCard({ balance = '₱ 2,269.21', onCashIn }) {

  const [activeTab, setActiveTab] = useState('wallet');

  return (
    <Card style={styles.card} mode="elevated">
      <Card.Content>

        
        {/* AVAILABLE BALANCE */}
        <View style={styles.topRow}>
          <Text style={styles.label}>AVAILABLE BALANCE</Text>

          <IconButton
            icon="eye"
            size={18}
            iconColor="#fff"
            style={styles.eye}
          />
        </View>

        {/* BALANCE + CASH IN */}
        <View style={styles.balanceRow}>
          <Text style={styles.balance}>
            {balance}
          </Text>

          <Button
            mode="contained"
            onPress={onCashIn}
            style={styles.cashInButton}
            labelStyle={styles.cashInText}
          >
            + Cash In
          </Button>
        </View>

      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({

  card: {
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#1972F9',
  },

  /* WALLET / SAVINGS */
  tabs: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  tabText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    marginRight: 20,
    fontWeight: '600',
  },

  activeTab: {
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingBottom: 3,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '700',
    fontSize: 12,
  },

  eye: {
    margin: 0,
  },

  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },

  balance: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },

  cashInButton: {
    backgroundColor: '#e4ebf5',
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  cashInText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#007CFF',
  },

});