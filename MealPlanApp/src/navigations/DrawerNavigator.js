import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, List, CustomDrawer } from '../screens'
import { Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window')

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                width: width
            }
        }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="List" component={List} />
        </Drawer.Navigator>
    );
}