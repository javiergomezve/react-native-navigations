import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Drawer from './src/Drawer';
import BottomTabs from './src/BottomTabs';
import StackNavigation from './src/Stack';
import TopBar from './src/TopBar';

export default function App() {
    // return <Drawer />;
    // return <BottomTabs />;
    // return <StackNavigation />;
    return (
        <SafeAreaProvider>
            <TopBar />
        </SafeAreaProvider>
    );
}
