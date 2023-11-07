import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import appColors from '../assets/styles/appColors';
import RenderCardListContext from '../contexts/RenderCardListContext';

const Header = () => {

  const { isListRendered, setIsListRendered } = React.useContext(RenderCardListContext)

  const onClickIcon = () => {
    setIsListRendered(!isListRendered)
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textTile}>
        Muestra de personajazos
      </Text>
      <Ionicons
        name={isListRendered ? 'checkmark-circle-outline' : 'close-circle-outline'}
        size={32}
        color={isListRendered ? appColors.greenNeon : appColors.redNeon}
        onPress={onClickIcon}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 45,
    backgroundColor: appColors.primary,
    width: '100%',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textTile: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})