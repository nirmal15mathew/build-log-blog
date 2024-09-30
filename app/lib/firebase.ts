// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getDocs, getFirestore, increment, query, updateDoc, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


interface PostType {
    id: string,
    author: string,
    category: string,
    content: string,
    title: string,
    views: number,
    timePublished: Date
}

export async function getAllPosts() {
    const postRef = collection(db, "posts")
    const postQuery = query(postRef)
    const docSnap = await getDocs(postQuery)
    let docs: PostType[] = []
    docSnap.forEach((doc) => {
        const { title, author, category, content, views,timePublished } = doc.data()
        docs.push({
            id: doc.id,
            title,
            author,
            category,
            views,
            content,
            timePublished
        })
    })

    return docs;
}

export async function getPost(postId: string) {
    const docRef = doc(db, "posts/"+postId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        return null
    }
}

export async function incrementPostViews(postId: string) {


    const postRef = doc(db, "posts", postId);

    // Atomically increment the population of the city by 50.
    await updateDoc(postRef, {
        views: increment(1)
    });
}