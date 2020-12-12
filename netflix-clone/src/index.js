import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
// import { seedDatabase } from './seed';

const config = {
		apiKey: "AIzaSyAVQe78aNrlliTggoL8scWPI_-6xEjNoY8",
		authDomain: "aj-netflix.firebaseapp.com",
		databaseURL: "https://aj-netflix-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "aj-netflix",
		storageBucket: "aj-netflix.appspot.com",
		messagingSenderId: "867121128397",
		appId: "1:867121128397:web:03a09167ee6fc1ca7a9a84",
		measurementId: "G-1XX3G2P1FR"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
