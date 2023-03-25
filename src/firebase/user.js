import { onSnapshot, doc, updateDoc } from "firebase/firestore"
import { ref, onUnmounted } from "vue"
import { db } from "./firebase"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const user = ref(null)

const auth = getAuth()
onAuthStateChanged(auth, (data) => {
  if (data) {
    user.value = data
  } else {
    user.value = null
  }

  console.log(user.value)
})

export const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
}

export const logout = async () => {
  await signOut(auth)
}

login(
  'alex.mamani@tecsup.edu.pe',
  'abc123'
)
setTimeout(logout, 10000)

export const useUserProfile = () => {
  const userProfile = ref({})
  const unsub = onSnapshot(
    doc(db, "profiles", "me"),
    (doc) => userProfile.value = doc.data()
  )
  onUnmounted(unsub)
  return userProfile
}

export const setActiveProjectId =
  async (activeProjectId) => updateDoc(
    doc(db, "profiles", "me"),
    {
      activeProjectId
    }
  )
