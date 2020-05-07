let health = 100
let hitCount = 0

function slap() {
  health = health - 1;
  let lowerHealth = health
  console.log("slap", lowerHealth)
  var myJSON = JSON.stringify(lowerHealth)
  document.getElementById("lowerHealth").innerHTML = myJSON
  updateHitCount()
  if (lowerHealth <= 0) { alert("you win"); location.reload() }
}

function punch() {
  health = health - 2;
  let lowerHealth = health
  console.log("punch", lowerHealth)
  var myJSON = JSON.stringify(lowerHealth)
  document.getElementById("lowerHealth").innerHTML = myJSON
  updateHitCount()
  if (lowerHealth <= 0) { alert("you win"); location.reload() }
}

function kick() {
  health = health - 3;
  let lowerHealth = health
  console.log("kick", lowerHealth)
  var myJSON = JSON.stringify(lowerHealth)
  document.getElementById("lowerHealth").innerHTML = myJSON
  updateHitCount()
  if (lowerHealth <= 0) { alert("you win"); location.reload() }
}

function updateHitCount() {
  hitCount = hitCount + 1;
  let updateHitCount = hitCount
  var myJSON = JSON.stringify(updateHitCount)
  document.getElementById("updateHitCount").innerHTML = myJSON
}

// function endGame() {
//   if (lowerHealth <= 0) { endGame() }

//   alert()
//   location.reload()
// }

// function alert() {
//   alert()
// }