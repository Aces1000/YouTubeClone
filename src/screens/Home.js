import React from 'react';

import { SafeAreaView } from '../components';
import ListItem from '../components/ListItem';
import { useRequest } from '../hooks';
import Header from '../components/Header';

const Home = () => {
  const { loading } = useRequest(
    async () => await new Promise((resolve) => setTimeout(resolve, 3000)),
  );

  return (
    <SafeAreaView loading={loading} center>
      <Header/>
      <ListItem/>
    </SafeAreaView>
  );
};

export default Home;
