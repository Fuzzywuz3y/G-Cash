import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, useTheme, Text } from 'react-native-paper';

export default function Header({ title = 'Hello!', onPressHelp }) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}> 
      <Appbar.Header statusBarHeight={0} style={[styles.appbar, { backgroundColor: theme.colors.primary }]}> 
        <Appbar.Content
          title={title}
          titleStyle={styles.title}
          style={styles.content}
        />
        <Appbar.Action icon="help-circle" onPress={onPressHelp} />
      </Appbar.Header>
      <View style={styles.subtitleContainer}>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Welcome back!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
  appbar: {
    elevation: 0,
  },
  content: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
  },
  subtitleContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
});
