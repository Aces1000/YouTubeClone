import React, { useState ,useEffect} from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';
import { ApiService } from '../services';

import { images } from '../style/global';
import colors from '../style/colors';

const ListItem = () => {
  const navigation = useNavigation();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
  const [videos, setVideos] = useState([
    // {
    //   name: 'Top 10 most liked songs',
    //   id: '1',
    //   videoURL: 'https://www.youtube.com/watch?v=EwguEODWX-I',
    // },
    // {
    //   name: 'Best goals from Euro 2020',
    //   id: '2',
    //   videoURL: 'https://www.youtube.com/watch?v=HPh4h9QP84Y',
    // },
    // {
    //   name: 'React Native Tutorial',
    //   id: '3',
    //   videoURL: 'https://www.youtube.com/watch?v=qSRrxpdMpVc',
    // },
    // {
    //   name: 'Fantasy Premier League team selection',
    //   id: '4',
    //   videoURL: 'https://www.youtube.com/watch?v=qMFZk9m19k4',
    // },
    // {
    //   name: 'Worst Injuries in UFC History',
    //   id: '5',
    //   videoURL: 'https://www.youtube.com/watch?v=spHVLpEL2JE',
    // },
    // {
    //   name: 'The Tragic Story of Nikola Tesla',
    //   id: '6',
    //   videoURL: 'https://www.youtube.com/watch?v=FeUA-0G1p5k',
    // },
    // {
    //   name: 'Best Viking Music',
    //   id: '7',
    //   videoURL: 'https://www.youtube.com/watch?v=V5Watai4qPM',
    // },
    // {
    //   name: 'How Italia Won the Euro 2020 Final',
    //   id: '8',
    //   videoURL: 'https://www.youtube.com/watch?v=zasQ0jvLDpw',
    // },
  ]);

  const getData=async()=>{
      try {
        setLoading(true);
        const res = await ApiService.get('videos', {

          params: {
            size: 10,
            page: 2,
            /*q: vrijednost texta iz search*/
          }
        });
        setVideos(res.data.data.rows)
        console.log(res.data.data.rows)
      } catch (err) {
        setError(err.response?.data?.error ?? err.message ?? 'An error occurred');
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    getData()
  }, []);

  const renderItem = ({ item }) => {
    const onVideoItemPress = () => {
      navigation.navigate('VideoDetails', { name: item.name, videoURL: item.videoURL });
    };

    return (
      <TouchableOpacity onPress={onVideoItemPress}>
         <Card item={item} />
      </TouchableOpacity>
    );
  };

  return <FlatList keyExtractor={(item) => item.id} data={videos} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    borderColor: colors.white,
    borderWidth: 2,
    flex: 1,
    backgroundColor: colors.gray,
    paddingTop: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  item: {
    flex: 1,
    backgroundColor: colors.gray,
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 24,
  },
  image: {
    width: 280,
    height: 130,
  },
});
export default ListItem;
