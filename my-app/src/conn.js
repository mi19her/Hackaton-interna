const admin = require ('firebase-admin');

const serviceAccount = require ("./hackaton-interna-firebase-adminsdk-2xsjh-f279b0c92f.json");
admin.initializeApp ({ 
  credencial: admin.credential.cert (serviceAccount),   
  databaseURL: "https://hackaton-interna.firebaseio.com",
});