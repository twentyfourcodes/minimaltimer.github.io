var uTime = prompt("Enter time in minutes below :", "");
if(uTime < '0'){
  alert("Hmm... haven't heard of such a time!");
}
var time = uTime * 60;

  const countdownEl = document.getElementById("countdown");
  setInterval(updateCounter, 1000);


function updateCounter(){
  var minutes = Math.floor(time/60);
  let seconds = time % 60;
  if(time>=1){
    if(seconds<10){
      seconds = '0' + seconds;
    }
    if(minutes<10){
      minutes = '0' + minutes;
    }
    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
  }
  else{
    countdownEl.innerHTML = `00:00`;
  }
}
/*notifications*/

function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // Whatever the user answers, we make sure Chrome stores the information
    if(!('permission' in Notification)) {
      Notification.permission = permission;
    }

    // set the button to shown or hidden, depending on what the user answers
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      notificationBtn.style.display = 'block';
    } else {
      notificationBtn.style.display = 'none';
    }
  }

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}
