// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
let heart = doccument.queryselector("like");

heart.addEventListener("click", () => {
  if (heart.innerHTML === EMPTY_HEART) {
    heart.innerHTML = FULL_HEART;
  }
});
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    if (mimicServerCall === FULL_HEART) {
      fetch("http://mimicServer.example.com")
        .then((resolve) => {
          return resolve.json();
        })
        .then((mimc) => console.log("simple liker"))
        .catch(() => {});
    }
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
