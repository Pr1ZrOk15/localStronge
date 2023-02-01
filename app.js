"use strict";

const doc = document.querySelector(".doc"),
  email = document.querySelector(".email"),
  name = document.querySelector(".name"),
  form = document.querySelector("form"),
  remove = document.querySelector("#remove");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    email: email.value,
    name: name.value,
  };

  e.target.reset();
  localStorage.setItem("user", JSON.stringify(user));
});

const user = JSON.parse(localStorage.getItem("user"));
doc.textContent = `${user.name}`;

remove.addEventListener("click", () => {
  localStorage.removeItem("user");
});

// localStronge asosiy 4 ta metodlari mavjud
// 1) set item --> elementni o'ranitish !
// 2) get item --> localStronge dagi ma'lumotni olib beradi !
// 3) remove & clear --> localStronge dagi ma'lumotni  o'chirish !
