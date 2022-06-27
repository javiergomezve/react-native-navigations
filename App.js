import 'react-native-gesture-handler';
import React from 'react';

import Drawer from './src/Drawer';
import BottomTabs from './src/BottomTabs';
import StackNavigation from './src/Stack';

export default function App() {
    // return <Drawer />;
    // return <BottomTabs />;
    return <StackNavigation />;
}
