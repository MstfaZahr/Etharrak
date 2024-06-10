// check for saved 'mode' in localStorage
let mode = localStorage.getItem('mode');

const modeToggle = document.querySelector('#dark');

const enableDarkMode = () => {
   // 1. Add the class to the body
   document.body.classList.add('dark');
   document.body.classList.remove('light');
   // 2. Update mode in localStorage
   localStorage.setItem('mode', 'dark');
}

const disableDarkMode = () => {
   // 1. Remove the class from the body
   document.body.classList.add('light');
   document.body.classList.remove('dark');
   // 2. Update mode in localStorage 
   localStorage.setItem('mode', "light");
}

// If the user already visited and enabled mode
// start things off with it on
if (mode === 'dark') {
   enableDarkMode();
}

// When someone clicks the button
modeToggle.addEventListener('click', () => {
   // get their mode setting
   mode = localStorage.getItem('mode');

   // if it not current enabled, enable it
   if (mode !== 'dark') {
      enableDarkMode();
      // if it has been enabled, turn it off  
   } else {
      disableDarkMode();
   }
});
