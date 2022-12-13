import {Settings} from "../screens/Settings";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { MainStackNavigator } from "./MainStackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MainStackNavigator" component={MainStackNavigator}/>
            <Drawer.Screen name="Setting" component={Settings}/>
        </Drawer.Navigator>
    )
};
