import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'

const FirebaseInitializing = () => {
    // Your Firebase configuration
    const firebaseConfig = {
        apiKey: 'AIzaSyCRVsw-_sTUj482_3zd43Gc0W4nea6n0Bk',
        authDomain: 'mag-s-project.firebaseapp.com',
        projectId: 'mag-s-project',
        storageBucket: 'mag-s-project.appspot.com',
        messagingSenderId: '384469548104',
        appId: '1:384469548104:web:e6f2d3fa6dba18f1f32c7d',
        measurementId: 'G-064MFK03XB',
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
    getAnalytics();

    // Return null, as this component is mainly for initialization
    return null

}

export default FirebaseInitializing
