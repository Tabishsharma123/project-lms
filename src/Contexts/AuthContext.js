import React, { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// Adding 'user role' to firestore during signup...
const addUserRole = async (userId, username, email, role, courseEnrolled, courseEnrolledCat, courseTitle) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userId: userId,
      username: username,
      email: email,
      role: role,
      courseEnrolled: courseEnrolled,
      courseEnrolledCat: courseEnrolledCat,
      courseTitle: courseTitle
    });
  } catch (e) {
    console.error("Error: ", e);
  }
};

// Getting 'user role' of authenticated user...
export const getUserRole = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  let role;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    role = doc.data().role;
  });
  return role;
};

// Getting 'username' of authenticated user...
export const getUserName = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  let username;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    username = doc.data().username;
  });
  return username;
};

// Getting 'courseEnrolled' of authenticated user...
export const getCourseEnrolled = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  let courseEnrolled;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    courseEnrolled = doc.data().courseEnrolled;
  });
  console.log(courseEnrolled);
  return courseEnrolled;
};

// Getting 'courseEnrolledCat' of authenticated user...
export const getCourseEnrolledCat = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  let courseEnrolledCat;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    courseEnrolledCat = doc.data().courseEnrolledCat;
  });
  console.log(courseEnrolledCat)
  return courseEnrolledCat;
};

// Getting 'all student's detail'...
export const getAllStudents = async () => {
  const equipment = collection(db, 'users');
  const snapshot = await getDocs(equipment);
  const result = snapshot.docs.map(doc => doc.data());
  let a = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i].role === 'STUDENT') {
      a.push(result[i])
      console.log(a)
    }
  }
  return a;
}

// Getting 'all teacher's detail'...
export const getAllTeachers = async () => {
  const equipment = collection(db, 'users');
  const snapshot = await getDocs(equipment);
  const result = snapshot.docs.map(doc => doc.data());
  let a = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i].role === 'TEACHER') {
      a.push(result[i])
      console.log(a)
    }
  }
  return a;
}

// Getting 'all courses'
export const getAllCourses = async () => {
  const equipment = collection(db, 'courses');
  const snapshot = await getDocs(equipment);
  const result = snapshot.docs.map(doc => doc.data());
  return result;
}
// get all users docs + collection ID
export const getAllDocs = async () => {
  const equipment = collection(db, 'users');
  const snapshot = await getDocs(equipment);
  let result = [];
  result.push(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  // console.log(result)
  return result;
}

// Get 'single courses'
export const getSingleCourses = async (id) => {
  const q = query(collection(db, "courses"), where("id", "==", id));
  const snapshot = await getDocs(q);
  const result = snapshot.docs.map(doc => doc.data());
  return result;
};


// Auth Functions for -> SIGNUP, LOGIN, RESET, UPDATE, LOGOUT 
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Signup ADMIN...
  function signupAdmin(email, password, username, role = "ADMIN") {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        addUserRole(e.user.uid, username, e.user.email, role);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Signup TEACHER...
  function signupTeacher(email, password, username, role = "TEACHER") {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        addUserRole(e.user.uid, username, e.user.email, role);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Signup STUDENT...
  function signupStudent(email, password, username, role = "STUDENT", courseEnrolled = "", courseEnrolledCat = "", courseTitle="") {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        addUserRole(e.user.uid, username, e.user.email, role, courseEnrolled, courseEnrolledCat , courseTitle);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  // function 'onAuthStateChanged' for changing state after login...
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("CurrentUser", user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signupAdmin,
    signupTeacher,
    signupStudent,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}