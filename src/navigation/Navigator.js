import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DrawerNavigator} from "./DrawerNavigator";

const Drawer = createDrawerNavigator();

export const MainNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
};
