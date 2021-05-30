 var firebaseConfig = {
    apiKey: "AIzaSyDUiRe56F59WnTkIN0FCu4MxVZzgO3xBmE",
    authDomain: "friendsbook-dadeb.firebaseapp.com",
    databaseURL: "https://friendsbook-dadeb-default-rtdb.firebaseio.com",
    projectId: "friendsbook-dadeb",
    storageBucket: "friendsbook-dadeb.appspot.com",
    messagingSenderId: "857518898896",
    appId: "1:857518898896:web:e9e87237164ad67390e8d5",
    measurementId: "G-T5XPHJ6M87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('friendsbook').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var nickname = getInputVal('nickname');
  var meet = getInputVal('meet');
  var call = getInputVal('call');
  var email = getInputVal('email');

 var party = getInputVal('party');
  var dance = getInputVal('dance');
  var food = getInputVal('food');
 
  var date = getInputVal('date');
  var occupation = getInputVal('occupation');
 var love = getInputVal('love');

  var fantasy = getInputVal('fantasy');
  var memory = getInputVal('memory');
 var impression = getInputVal('impression');

  var compliment = getInputVal('compliment');
  var watch = getInputVal('watch');
 var admire = getInputVal('admire');

  var me = getInputVal('me');
  var bucketlist = getInputVal('bucketlist');
   var cherish = getInputVal('cherish');

  var like = getInputVal('like');
  var desire = getInputVal('desire');
 
  var proud = getInputVal('proud');
  var forget = getInputVal('forget');
  var thoughts = getInputVal('thoughts');
   var ask = getInputVal('ask');
 

  // Save message
  saveMessage(name, nickname, meet, call, email, party, dance, food, date, occupation, love, fantasy, memory, impression, compliment, watch, admire, me, bucketlist, cherish, like, desire, proud, forget, thoughts, ask);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('friendsbook').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, nickname, meet, call, email, party, dance, food, date, occupation, love, fantasy, memory, impression, compliment, watch, admire, me, bucketlist, cherish, like, desire, proud, forget, thoughts, ask){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    nickname:nickname,
    meet:meet,
    call:call,
    email:email,
    party:party,
    dance:dance,
    food:food,
    date:date,
    occupation:occupation,
    love:love,
    fantasy:fantasy,
    memory:memory,
    impression:impression,
    compliment:compliment,
    watch:watch,
    admire:admire,
    me:me,
    bucketlist:bucketlist,
    cherish:cherish,
    like:like,
    desire:desire,
    proud:proud,
    forget:forget,
    thoughts:thoughts,
    ask:ask

    
  });
}
















var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:40';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}