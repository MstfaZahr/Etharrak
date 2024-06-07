const darkIcon = document.querySelector("#dark")
const body = document.querySelector("body")
// const darkBody = darkIcon.querySelectorAll(".dark-body")

darkIcon.addEventListener("click", () => {
   body.classList.toggle("dark")
   body.classList.toggle("light")
   // for (part of darkBody) {
   //    part.classList.toggle("dark-enabled")
   // }
})