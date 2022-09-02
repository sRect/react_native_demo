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
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigate} from 'react-router-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: window.height,
    width: window.width,
    paddingBottom: 50,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  webview: {
    flex: 1,
  },
  btnOutWrapper: {
    height: 100,
  },
  btnWrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  btn: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    marginTop: 10,
  },
});

const WebviewDemo = () => {
  const navigate = useNavigate();
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

  const gotoHome = () => {
    console.log('gotohome');
    navigate('/', {replace: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.btnOutWrapper}>
        <View style={styles.btnWrapper}>
          <Button
            style={styles.btn}
            title="clearCache"
            accessibilityLabel="clear webview cache"
            onPress={handleClearCache}
          />
          <Button style={styles.btn} title="home" onPress={gotoHome} />
        </View>
      </View>
      <WebView
        ref={webviewRef}
        style={styles.webview}
        // cacheEnabled={false}
        originWhitelist={['*']}
        source={{
          uri: 'https://srect.github.io/',
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
