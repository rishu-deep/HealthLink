import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Splash from '../components/Splash';
import Home from '../components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-remix-icon';

const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const AddAppointmentStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'HealthLink',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Montserrat-Bold', color: '#557DE5'},
            // headerShadowVisible: false,

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{marginRight: 10}}>
                <Icon name="ri-menu-line" size="24" color="#1877F2" />
              </TouchableOpacity>
            ),

            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{marginRight: 10}}>
                <Icon name="ri-notification-line" size="24" color="#1877F2" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function Routes() {
//   const HomeScreen = () => {
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: 'HealthLink',
//           headerTitleAlign: 'center',
//           headerTitleStyle: {fontFamily: 'Montserrat-Bold', color: '#557DE5'},
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => alert('Right Menu Clicked')}
//               style={{marginRight: 10}}>
//               <Icon name="ri-menu-line" size="24" color="#1877F2" />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => alert('Right Menu Clicked')}
//               style={{marginRight: 10}}>
//               <Icon name="ri-notification-line" size="24" color="#1877F2" />
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       {/* <HomeStack.Screen name="ShowHome" component={ShowHome} /> */}
//     </HomeStack.Navigator>;
//   };

//   // const SearchScreen = () => {
//   //   <SearchStack.Navigator>
//   //     <SearchStack.Screen name="Search" component={Search} />
//   //     <SearchStack.Screen name="ShowSearch" component={ShowSearch} />
//   //   </SearchStack.Navigator>;
//   // };

//   // const AddAppointmentScreen = () => {
//   //   <AddAppointmentStack.Navigator>
//   //     <AddAppointmentStack.Screen name="Home" component={AddAppointment} />
//   //     <AddAppointmentStack.Screen name="ShowHome" component={AddAppointment} />
//   //   </AddAppointmentStack.Navigator>;
//   // };

//   // const AccountScreen = () => {
//   //   <AccountStack.Navigator>
//   //     <AccountStack.Screen name="Home" component={Account} />
//   //     <AccountStack.Screen name="ShowHome" component={Account} />
//   //   </AccountStack.Navigator>;
//   // };

//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             // headerShown: false,
//             tabBarIcon: ({focused}) => (
//               <Icon
//                 name="ri-home-line"
//                 size="24"
//                 color={focused ? '#557DE5' : 'gray'}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={Splash}
//           options={{
//             tabBarIcon: ({focused}) => (
//               <Icon
//                 name="ri-search-line"
//                 size="24"
//                 color={focused ? '#557DE5' : 'gray'}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Add Appointment"
//           component={Signup}
//           options={{
//             tabBarIcon: ({focused}) => (
//               <Icon
//                 name="ri-add-circle-line"
//                 size="24"
//                 color={focused ? '#557DE5' : 'gray'}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Account"
//           component={Splash}
//           options={{
//             tabBarIcon: ({focused}) => (
//               <Icon
//                 name="ri-user-line"
//                 size="24"
//                 color={focused ? '#557DE5' : 'gray'}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
