import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from "./pages/Products";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products}
          options={{
            title: "Ürünler",
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerTitleAlign: 'center',
          }} />
        <Stack.Screen name="DetailPage" component={Detail}
          options={{
            title: "Ürün Detay",
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;