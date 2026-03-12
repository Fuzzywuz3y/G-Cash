import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GcashHome from './screens/GcashHome';
import BottomNav from './components/BottomNav';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0074FF',
    accent: '#00c777',
    background: '#F3F7F2',
  },
};

const EmptyScreen = () => <View style={{ flex: 1, backgroundColor: '#F3F7FB' }} />;

const SCENES = {
  home: GcashHome,
  inbox: EmptyScreen,
  qr: EmptyScreen,
  transactions: EmptyScreen,
  profile: EmptyScreen,
};

export default function App() {
  const [active, setActive] = useState('home');
  const ActiveScene = SCENES[active] || EmptyScreen;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
          <View style={styles.scene}>
            <ActiveScene />
          </View>
          <BottomNav activeKey={active} onChange={setActive} />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const NAV_HEIGHT = 90;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    paddingBottom: NAV_HEIGHT,
  },
});
