import React from 'react';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import Login from './screens/Login';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';

const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
}, {
    initialRouteName: 'Profile'
})


const MenuRoutes = createMaterialBottomTabNavigator(
    {
        Feed: {
            name: 'Feed',
            screen: Feed,
            navigationOptions: {
                title: 'Feed',
                tabBarIcon: ({ tintColor }) =>
                    <Icon name='home' size={30} color={tintColor} />
            }
        },
        Add: {
            name: 'AddPhoto',
            screen: AddPhoto,
            navigationOptions: {
                title: 'Add Picture',
                tabBarIcon: ({ tintColor }) =>
                    <Icon name='camera' size={30} color={tintColor} />
            }
        },
        Profile: {
            name: 'Profile',
            screen: loginOrProfileRouter,
            navigationOptions: {
                title: 'Profile',
                tabBarIcon: ({ tintColor }) =>
                    <Icon name='user' size={30} color={tintColor} />
            }
        }
    },
    {
        initialRouteName: 'Feed',
        activeColor: '#F000',
        inactiveColor: '#000',
        barStyle: { backgroundColor: '#FFF' }
    }
);



const App = createAppContainer(MenuRoutes)
export default App;