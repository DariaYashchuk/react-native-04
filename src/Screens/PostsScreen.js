import { View, Text, StyleSheet } from 'react-native'

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Публікації</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
