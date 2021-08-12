import React from 'react';

import { SafeAreaView } from '../components';
import ListItem from '../components/ListItem';
import { useRequest } from '../hooks';
import Header from '../components/Header';

const Home = () => {
  

  return (
    <SafeAreaView center>
      <Header />
      <ListItem />
    </SafeAreaView>
  );
};

export default Home;
