/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style';

type ContentTabProps = {
    key: number,
    content: React.ReactNode,
    tabTitle: string,
    tabIcon?: any,
    tabTitleStyle?: StyleProp<TextStyle>,
    tabTitleFocusedStyle?: StyleProp<TextStyle>,
    tabStyle?: {
        backgroundColor: string | '#FFF',
        defaultBackgroundColor: string | '#FFF',
        bottomBorderColor: string,
        defaultBottomBorderColor: string,
        bottomBorderWidth: number,
        tabBarInnerContainerRatio: number
    },
    tabIconStyle?: {
      defaultColor: string
    },
    tabInnerContainerStyle?: StyleProp<ViewStyle>
}

type TabViewProps = {
    dataContent: ContentTabProps[],
    tabBarContainerStyle?: StyleProp<ViewStyle>,
    tabIndex?: number,
    contentContainerStyle?: StyleProp<ViewStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    innerContentContainerStyle?: StyleProp<ViewStyle>
}

const { width } = Dimensions.get('window');

const CustomTabView: React.FunctionComponent<TabViewProps> = ({
    dataContent,
    tabBarContainerStyle,
    tabIndex,
    contentContainerStyle,
    containerStyle,
    innerContentContainerStyle
}) => {

  const [currentKey, setCurrentKey] = useState(tabIndex);
  const [currentPosition, setCurrentPosition] = useState(0);

  const scrollX = new Animated.Value(0);

  const position = Animated.divide(scrollX, width);

  const scroll = useRef<ScrollView | null>(null);

  const handleScroll = (event: any) => {
    const positionX = event.nativeEvent.contentOffset.x;

    setCurrentPosition(positionX);
  };

  const handleScrollEnd = (event: any) => {
    let contentOffset = event.nativeEvent.contentOffset;
    let viewSize = event.nativeEvent.layoutMeasurement;
    let pageNum = Math.round(contentOffset.x / viewSize.width);
    setCurrentKey(pageNum);
  };

  const onPressButton = (index: number) => {
    scroll.current?.scrollTo({
      x: width * index,
      y: 0,
      animated: false,
    });
    setCurrentKey(index);
  };

  return (
    <View style={ [styles.tabViewMainContainer, containerStyle] }>

    {/** Tab bar */}
      <View
        style={ [styles.defaultTabBarContainer, tabBarContainerStyle] }>
        {dataContent.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={ 0.7 }
              style={ [
                {
                  borderBottomColor:
                    currentKey === item.key ? item.tabStyle?.bottomBorderColor : item.tabStyle?.defaultBottomBorderColor,
                  borderBottomWidth: currentKey === item.key ? item.tabStyle?.bottomBorderWidth : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ] }
              key={ item.key }
              onPress={ () => onPressButton(item.key) }
            >
                <View style={ [
                  styles.tabInnerContainer,
                  item.tabInnerContainerStyle,
                  { width: (width / dataContent.length) * 0.85, }
                ] }>
                  {
                    item.tabIcon ?
                      <View style={ [styles.imgContainer, { backgroundColor: currentKey === item.key ? item.tabStyle?.backgroundColor : item.tabStyle?.defaultBackgroundColor, }] }>
                          <item.tabIcon color={ currentKey === item.key ? '#FFF' : item.tabIconStyle?.defaultColor } />
                      </View>
                    :
                    undefined
                  }
                  <Text style={ [
                    styles.tabBarText, currentKey === item.key ? item.tabTitleFocusedStyle : item.tabTitleStyle,
                    // item.tabTitleStyle
                  ] }>
                    {item.tabTitle}
                  </Text>
                </View>
            </TouchableOpacity>
          );
        })}
      </View>
      
    {/** Content */}
      <View style={ [styles.contentContainer, contentContainerStyle] }>
        <ScrollView
          ref={ scroll }
          bounces={ false }
          horizontal
          showsHorizontalScrollIndicator={ false }
          showsVerticalScrollIndicator={ false }
          snapToInterval={ width }
          snapToAlignment='center'
          pagingEnabled
          decelerationRate='fast'
          onMomentumScrollEnd={ event => handleScrollEnd(event) }
          onScroll={ Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
              listener: event => handleScroll(event),
            },) }
          scrollEventThrottle={ 16 }>
          {dataContent.map((item, i) => (
            <View key={ i } style={ [styles.innerContentContainer, innerContentContainerStyle] }>
              {
                item.content
              }
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CustomTabView;
