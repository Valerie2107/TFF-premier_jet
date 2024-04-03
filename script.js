let cliquable = document.querySelector(".wrapper")
let main = document.querySelector('main')

cliquable.addEventListener('click', () => {
    main.classList.toggle("hidden");
  });