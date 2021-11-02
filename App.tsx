import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTabView from './src/TabView'

interface Props {
  
}

const App = (props: Props) => {


const FirstRoute = () => (
    <View>
      <Text>Page one with some content</Text>
    </View>
);
  
const SecondRoute = () => (
  <View>
    <Text>Page two with some content</Text>
  </View>
);

const ThirdRoute = () => (
  <View>
    <Text>Page three with some content</Text>
  </View>
);

const FourthRoute = () => (
  <View>
    <Text>Page four with some content</Text>
  </View>
);

  return (
    <CustomTabView
        tabIndex={ 0 }
        contentContainerStyle={ { paddingTop: 24 } }
        dataContent={ [
                {
                    key: 0,
                    content: FirstRoute(),
                    tabStyle: {
                        backgroundColor: '#ffdbe3',
                        defaultBackgroundColor: '#FFFFFF',
                        bottomBorderWidth: 2,
                        bottomBorderColor: '#ffdbe3',
                        defaultBottomBorderColor: '#6e6e6e',
                        tabBarInnerContainerRatio: 0.7
                    },
                    tabTitle: 'Tab 1',
                    // tabIcon: AwaitingImage,
                    // tabIconStyle: { defaultColor: '#ffdbe3' },
                    tabTitleStyle: styles.tabBarText,
                    tabTitleFocusedStyle: {
                        fontStyle: 'normal',
                        fontSize: 12,
                        color: '#ffdbe3'
                    }
                },
                {
                    key: 1,
                    content: SecondRoute(),
                    tabStyle: {
                        backgroundColor: '#5473DC',
                        defaultBackgroundColor: '#FFFFFF',
                        bottomBorderWidth: 2,
                        bottomBorderColor: '#5473DC',
                        defaultBottomBorderColor: '#6e6e6e',
                        tabBarInnerContainerRatio: 0.7
                    },
                    tabTitle: 'Tab 2',
                    // tabIcon: AcceptedImage,
                    // tabIconStyle: { defaultColor: '#5473DC' },
                    tabTitleStyle: styles.tabBarText,
                    tabTitleFocusedStyle: {
                        fontStyle: 'normal',
                        fontSize: 12,
                        color: '#5473DC'
                    }
                },
                {
                    key: 2,
                    content: ThirdRoute(),
                    tabStyle: {
                        backgroundColor: '#5EC3BD',
                        defaultBackgroundColor: '#FFFFFF',
                        bottomBorderWidth: 2,
                        bottomBorderColor: '#5EC3BD',
                        defaultBottomBorderColor: '#6e6e6e',
                        tabBarInnerContainerRatio: 0.7
                    },
                    tabTitle: 'Tab 3',
                    // tabIcon: PaidImage,
                    // tabIconStyle: { defaultColor: '#5EC3BD' },
                    tabTitleStyle: styles.tabBarText,
                    tabTitleFocusedStyle: {
                        fontStyle: 'normal',
                        fontSize: 12,
                        color: '#5EC3BD'
                    }
                },
                {
                    key: 3,
                    content: FourthRoute(),
                    tabStyle: {
                        backgroundColor: '#EA2C2C',
                        defaultBackgroundColor: '#FFFFFF',
                        bottomBorderWidth: 2,
                        bottomBorderColor: '#EA2C2C',
                        defaultBottomBorderColor: '#6e6e6e',
                        tabBarInnerContainerRatio: 1
                    },
                    tabTitle: 'Tab 4',
                    // tabIcon: RejectedImage,
                    // tabIconStyle: { defaultColor: '#EA2C2C' },
                    tabTitleStyle: styles.tabBarText,
                    tabTitleFocusedStyle: {
                        fontStyle: 'normal',
                        fontSize: 12,
                        color: '#EA2C2C'
                    }
                },
            ]
        }
    />
  )
}

export default App

const styles = StyleSheet.create({
  
  tabBarText: {
    fontStyle: 'normal',
    fontSize: 12,
    color: '#273240'
},
})
