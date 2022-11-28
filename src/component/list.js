import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import { fetchHotel } from '../redux/hotel';
import { fetchUser } from '../redux/user';

export const List = () => {
    const hotel = useSelector((state)=>state.hotel)
    const { user } = useSelector((state) => state.user);
    const urlUser = "https://fakestoreapi.com/users";
    const dispach = useDispatch()
    const fetching =()=>{
          dispach(fetchHotel())
        }
  return (
    <>
    <Text>{JSON.stringify(hotel)}</Text>
    <Button title='Hotel' onPress={fetching}/>
    </>
  )
}
