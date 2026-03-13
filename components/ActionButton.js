import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-paper';

const NAV_ITEMS = [
  { key: 'home', icon: 'home', label: 'Home' },
  { key: 'inbox', icon: 'email', label: 'Inbox' },
  { key: 'qr', icon: 'qrcode-scan', label: 'Scan' },
  { key: 'transactions', icon: 'history', label: 'Transactions' },
  { key: 'profile', icon: 'account', label: 'Profile' },
];

export default function ActionButton({ activeKey, onChange }) {
  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item) => {
        const active = activeKey === item.key;

        return (
          <TouchableOpacity
            key={item.key}
            style={styles.button}
            onPress={() => onChange && onChange(item.key)}
          >
            <Icon
              source={item.icon}
              size={26}
              color={active ? '#0074FF' : '#9aa0a6'}
            />

            <Text
              style={[
                styles.label,
                { color: active ? '#0074FF' : '#9aa0a6' },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 11,
    marginTop: 2,
  },
});