// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
  // import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";  
  import { getFirestore, query, where, doc, getDoc, setDoc, getDocs, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js"

  const firebaseConfig = {
    apiKey: "AIzaSyCNIXjCHODELYo7Rl_br0izGdz-SgHLrjc",
    authDomain: "tailwindtest-e7ad2.firebaseapp.com",
    projectId: "tailwindtest-e7ad2",
    storageBucket: "tailwindtest-e7ad2.appspot.com",
    messagingSenderId: "637017239186",
    appId: "1:637017239186:web:a50ad4529bd3fc7c04004b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const realtimeDB = getDatabase(app);
  const auth = getAuth();
  const db = getFirestore();

  submit.addEventListener('click',(e) => {
          // Getting Reference from elements
  var email = document.getElementById('emailIn').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
          // Create user function
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;

      alert('user created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    // ..
    });
});

  //    Getting References 

let name = document.getElementById('name');
let email = document.getElementById('emailIn');
let message = document.getElementById('message');
let displayUserEmail = document.getElementById('displayE');
let displayUserName = document.getElementById('displayU');
let displayUserMessage = document.getElementById('displayM');
    // Adding Documents

    async function AddDocument_CustomID(){
      var ref = doc(db,"clients",name.value);

      const docRef = await setDoc(
        ref, {
          Name: name.value,
          Email: email.value,
          Message: message.value
        }
      )
      .then(()=>{
        alert("Data stored")
      })
      .catch((error)=>{
        alert(error);
      });
    }

    // Assign event to button

    submitButton.addEventListener("click", AddDocument_CustomID);

    // Fetching Documents

    // async function GetADocument(){
    //   var ref = doc(db,"clients", name.value);

    //   const docSnap = await getDoc(ref);
      
    //   if(docSnap.exists()){
    //     testI.value = docSnap.data().Email;
    //     message.value = docSnap.data().Message;
    //   }
    //   else{
    //     alert("No such client");
    //   }
    // }
    // submitButton.addEventListener("click", GetADocument);

    const querySnapshot = await getDocs(collection(db, "clients"));
    querySnapshot.forEach((doc) => {
    
    
    
    let dis = document.getElementById('dis')
    dis.innerHTML=`
      <h1>${doc.data().Email}</h1>
    `
    
    displayUserName.value = doc.data().Name;
    displayUserEmail.value = doc.data().Email;
    displayUserMessage.value = doc.data().Message;

    // console.log(doc.id, " => ", doc.data());
});
