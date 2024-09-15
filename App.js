import { NavigationContainer } from "@react-navigation/native";
import{ createNativeStackNavigator} from "@react-navigation/native-stack";
import Cau2a from "./view/Cau2a";
import Cau2b from "./view/Cau2b";
import Cau2c from "./view/Cau2c";


const Stack= createNativeStackNavigator()

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Cau2a" component={Cau2a}/>
                <Stack.Screen name="Cau2b" component={Cau2b}/>
                <Stack.Screen name="Cau2c" component={Cau2c}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}