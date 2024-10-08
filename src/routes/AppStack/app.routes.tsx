import React from "react";
import { createNativeStackNavigator } from  '@react-navigation/native-stack'
import Home from "@screens/Home";
import LoginPage from "@screens/LoginPage";
import SignInPage from "@screens/SignInPage";


const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
        <AppStack.Navigator>
                <AppStack.Screen name='Home'
                component={Home}
                options={{ header: () => <></> }}/>
                <AppStack.Screen name='LoginPage'
                component={LoginPage}
                options={{ header: () => <></> }}/>
                <AppStack.Screen name='SignInPage'
                component={SignInPage}
                options={{ header: () => <></> }}/>
        </AppStack.Navigator>
)

export default AppRoutes