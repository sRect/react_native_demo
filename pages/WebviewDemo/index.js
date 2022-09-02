import React, {memo, useRef} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Dimensions,
  Button,
  Platform,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: window.height,
    paddingBottom: 50,
  },
  webview: {
    flex: 1,
  },
  clearBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
});

const WebviewDemo = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const webviewRef = useRef(null);

  const handleOnError = e => {
    console.log('webview页面加载失败==>');
    console.warn(e);
  };

  const handleOnLoad = e => {
    console.log('webview页面加载完成==>');
  };

  const handleNavigationChange = e => {
    console.log('handleNavigationChange==>', e);
  };

  const handleClearCache = () => {
    console.log('clearCache');
    if (webviewRef.current) {
      Alert.alert('注意', '确定清除缓存吗？', [
        {
          text: '取消',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '确定',
          onPress: () => {
            Platform.OS === 'android' && webviewRef.current.clearCache(true);
            webviewRef.current.reload();
          },
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        networkActivityIndicatorVisible={true}
      />
      <Button
        style={styles.clearBtn}
        title="clearCache"
        accessibilityLabel="clear webview cache"
        onPress={handleClearCache}
      />
      <WebView
        ref={webviewRef}
        style={styles.webview}
        // cacheEnabled={false}
        originWhitelist={['*']}
        source={{
          uri: 'https://app.test.doclive.cn/app-web/#/medical/detail/doctorList',
        }}
        // cacheMode="LOAD_NO_CACHE"
        onError={handleOnError}
        onLoad={handleOnLoad}
        onNavigationStateChange={handleNavigationChange}
      />
    </SafeAreaView>
  );
};

export default memo(WebviewDemo);
