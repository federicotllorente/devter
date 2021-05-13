import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtHe0GbNkZXBfviuk5FljzcmDg8lzRPqQ",
    authDomain: "devter-a2490.firebaseapp.com",
    projectId: "devter-a2490",
    storageBucket: "devter-a2490.appspot.com",
    messagingSenderId: "1017915353993",
    appId: "1:1017915353993:web:f912f4429c9d0ed2d0cf58",
    measurementId: "G-RYHHST12JR"
}

// firebase.default.initializeApp(firebaseConfig)
!firebase.default.apps.length && firebase.default.initializeApp(firebaseConfig)

export const loginWithGitHub = async () => {
    const gitHubProvider = new firebase.default.auth.GithubAuthProvider()
    return await firebase.default.auth().signInWithPopup(gitHubProvider)
        .then(user => {
            console.log(user)
            const { additionalUserInfo } = user
            const { username, profile } = additionalUserInfo
            const { avatar_url, blog } = profile
            return {
                avatar: avatar_url,
                username,
                url: blog
            }
        })
        .catch(err => {
            console.error(err)
            return null
        })
}