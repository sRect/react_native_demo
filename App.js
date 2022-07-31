import React, {Suspense} from 'react';
import {View} from 'react-native';
import Loading from './components/Loaing';
import RouterConfig from './routes';
import RootStore from './store/RootStore';

const App = () => {
  return (
    <RootStore>
      <View>
        <Suspense fallback={<Loading loadingText="my loading..." />}>
          <RouterConfig />
        </Suspense>
      </View>
    </RootStore>
  );
};

export default App;
