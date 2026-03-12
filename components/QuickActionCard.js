import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function QuickActionCard({ icon, title, onPress }) {
  return (
    <Card style={styles.card} mode="elevated" onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={28} color="#006fb3" />
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 76,
    height: 96,
    marginRight: 10,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  iconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 111, 179, 0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
});
