import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
    padding: 10,
    marginBottom: 3,
  },
  highlightedContainer: {
    backgroundColor: 'rgb(214, 214, 214)',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
  },
  highlightedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
