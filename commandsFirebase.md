# 117: Setting Up Firebase Project

```
firebase.google.com
get started

>add project
vue Firebase

>Continue
Disable Google Analitycs for this project

>Create project
Continue
```

```
Web </>
1 Register App
Vue Firebase

Register App
(don't close)
(copy)
```

```
Terminal
npm install firebase
```

```
src/firebase/firebase.js
(paste)
export const app = initializeApp(firebaseConfig);
```

# 119. Playing with Firestore

```
Start Collection
CollectionID: projects
(Document parent path: projects)
Document ID: Auto-ID
Field, Type, Value: name, string, First project
Save
```

```
Delete Collection NO
```

# 121. Setting Up Data First (Important)

```
npm install firebase
```

# 128. Real-time Single Document Updates [Project]

```
start a collection
CollectionID: profiles
Document ID: me

Field, Type, Value: activeProjectId, string, first
```

# 132. Firestore Subcollections (Keeping Tracks)

## Instructions for adding data

```
firebase
first (data already entered)
start collection
Collection ID: tasks
Next
DocumentID: Auto-ID
```

## Add Data

```
Field, Type, Value: description, string, Task from Firestore
Field, Type, Value: done, boolean, false
Field, Type, Value: priority, boolean, false
Save
```

# 140. Setting Up Authentication in Firebase

```
Authentication
Get started
Sign-in Providers
Email-Password
Enable
Save
```

```
Users
Agregar Usuario
alex@corre.com
123456
```

# CHORE: 148. Project Security Rules - Practical Example

### firebase.google.com/docs/rules/rules-language#firestore

### https://firebase.google.com/docs/rules/rules-language?hl=es-419#firestore

## Go to: Firestore Database/Reglas

```
match /projects/{projectId} {
    allow create: if request.auth != null
    allow read, write: if request.auth != null && request.auth.uid == resource.data.uid

    match /tasks/{taskId} {
        allow read, write: if request.auth != null && request.auth.uid == get(/databases/$(database)/documents/projects/$(projectId).data.uid)
    }
}

match /profiles/{profileId} {
allow read, write: if request.auth != null && request.auth.uid == profileId
}
```

> Publish
