import React, {Suspense} from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
import Loading from './components/Loaing';
import RouterConfig from './routes';
import RootStore from './store/RootStore';

const App = () => {
  return (
    <RootStore>
      {Platform.OS === 'android' ? (
        <View>
          <Suspense fallback={<Loading loadingText="my loading..." />}>
            <RouterConfig />
          </Suspense>
        </View>
      ) : (
        <SafeAreaView>
          <Suspense fallback={<Loading loadingText="my loading..." />}>
            <RouterConfig />
          </Suspense>
        </SafeAreaView>
      )}
    </RootStore>
  );
};

export default App;
