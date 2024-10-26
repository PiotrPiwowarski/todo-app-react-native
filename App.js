import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default App = () => {

  const [buttonStyle, setButtonStyle] = useState(styles.button);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello world!</Text>
			<StatusBar hidden={true}/>
			<TouchableOpacity
				style={buttonStyle}
				onPressIn={() => setButtonStyle(styles.clickedButton)}
				onPressOut={() => setButtonStyle(styles.button)}>
				<Text style={styles.buttonText}>click on me</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6D214F',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 45,
		color: 'white',
		textDecorationLine: 'underline',
	},
	button: {
		margin: 50,
		padding: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid'
	},
  clickedButton: {
    margin: 50,
		padding: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid',
    backgroundColor: 'white'
  },
	buttonText: {
		color: 'white',
		fontSize: 20,
	},
});
