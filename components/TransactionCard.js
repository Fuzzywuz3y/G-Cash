import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

export default function TransactionCard({ title, amount, date, icon, type }) {
  const isCredit = type === 'credit';

  return (
    <Card style={styles.card} mode="elevated">
      <Card.Content style={styles.content}>
        <Avatar.Icon size={36} icon={icon} style={[styles.icon, isCredit ? styles.credit : styles.debit]} />
        <View style={styles.info}>
          <Text variant="titleSmall" style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text variant="bodySmall" style={styles.date}>
            {date}
          </Text>
        </View>
        <Text style={[styles.amount, isCredit ? styles.credit : styles.debit]}>
          {isCredit ? '+' : '-'}{amount}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 14,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#E0F7F4',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontWeight: '700',
  },
  date: {
    color: '#666',
    marginTop: 2,
  },
  amount: {
    fontWeight: '700',
  },
  credit: {
    color: '#00A65B',
  },
  debit: {
    color: '#E84F5A',
  },
});
