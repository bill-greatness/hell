import {StyleSheet}  from 'react-native'

export const  _colors = {
  bgDark:"",
  bgLight:"",
  text:"",
  icon:"",
}

export const _ns = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'
  },
  space_between:{
    justifyContent:'space-between'
  },
  center:{
    alignItems:'center',
    alignSelf:'center'
  },
  headers:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'green',
    width:'100%'
  }
})
