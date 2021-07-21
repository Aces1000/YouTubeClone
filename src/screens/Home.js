import React from 'react';

import { SafeAreaView, Text } from '../components';
import { useRequest } from '../hooks';

const Home = () => {
  const { loading } = useRequest(
    async () => await new Promise((resolve) => setTimeout(resolve, 3000)),
  );

  return (
    <SafeAreaView loading={loading} center>
      <Text>This is the Home Screen.</Text>
    </SafeAreaView>
  );
};

export default Home;
