


//  function for open the menu bar
let menubtn = document.querySelector('.menubtn')
let menubtn1 = document.querySelector('.cross')
let menut = document.querySelector("#menut")
menubtn.addEventListener("click", () => {
  console.log("menubar clicked")
  menut.style.left = "0%"
  menut.style.transition = "all 1s ease"
  menubtn1.style.left = "100px"
  menubtn1.style.top = "100px"
  menubtn.style.top = "0%";
})
//   function for close (cross) button
menubtn1.addEventListener("click", () => {
  menut.style.left = "-200%";
  menubtn1.style.top = "-100%";
  console.log(" ab menu bar closed huaa");
  
})



