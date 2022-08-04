import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Tab/TabNavigator";

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}

export default MainNavigator