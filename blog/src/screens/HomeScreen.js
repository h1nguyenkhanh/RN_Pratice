import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'

export default function HomeScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <>
      <Text style={styles.header}>Home Screen</Text>
      <Button
        title="Add new post"
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        renderItem={({index, item}) => 
          <TouchableOpacity
            onPress={()=>{deleteBlogPost(index)}}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item) => item.title}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center"
  }
})
