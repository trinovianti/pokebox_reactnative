import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginRight:'5%', 
    marginLeft:'5%', 
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '8%',
    width: '60%',
    marginTop:'150%',
    borderBottomWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 15,
    alignContent:'center'
  },
  buttonfont: {
    fontSize: 20, 
    color: '#5C5959'
  },
  descfont: {
    marginTop: '10%', 
    marginRight:'5%', 
    marginLeft:'5%', 
    fontSize: 20, 
    color: '#5C5959',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', 
  }
});