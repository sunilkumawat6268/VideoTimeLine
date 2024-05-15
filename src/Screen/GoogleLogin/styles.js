import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  googleImage: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  googleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
