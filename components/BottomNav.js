import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const TAB_ITEMS = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'inbox', label: 'Inbox', icon: 'email' },
  { key: 'qr', label: 'QR', icon: 'qrcode-scan', isCenter: true },
  { key: 'transactions', label: 'Transactions', icon: 'history' },
  { key: 'profile', label: 'Me', icon: 'account' },
];

export default function BottomNav({ activeKey, onChange }) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}> 
      {TAB_ITEMS.map((tab) => {
        const isActive = tab.key === activeKey;
        const iconColor = isActive ? theme.colors.primary : '#8E8E93';

        if (tab.isCenter) {
          return (
            <Pressable
              key={tab.key}
              style={[styles.centerButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => onChange(tab.key)}
            >
              <Icon name={tab.icon} size={28} color="#fff" />
            </Pressable>
          );
        }

        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
          >
            <Icon name={tab.icon} size={22} color={iconColor} />
            <Text style={[styles.label, { color: iconColor }]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#D1D1D6',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    marginTop: 2,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
});
