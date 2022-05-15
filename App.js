import React, {Suspense} from 'react';
import {View} from 'react-native';
import Loading from './components/Loaing';

import RouterConfig from './routes';

const App = () => {
  return (
    <View>
      <Suspense fallback={<Loading loadingText="my loading..." />}>
        <RouterConfig />
      </Suspense>
    </View>
  );
};

export default App;
