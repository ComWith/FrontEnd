const HIDDEN_CLASSNAME = "hidden";
const USER_KEY = "Username";

const userForm = document.getElementById("user-form");
const userInput = userForm.querySelector("input");
const hello = document.getElementById("title");

const onUserSubmit = (e) => {
  e.preventDefault();
  const userName = userInput.value;
  userForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USER_KEY, userName);
  showHello(userName);
};

const showHello = (userName) => {
  hello.innerText = `안녕하세요, ${userName}님!`;
  hello.classList.remove(HIDDEN_CLASSNAME);
};

const savedUserName = localStorage.getItem(USER_KEY);

if (savedUserName === null) {
  userForm.classList.remove(HIDDEN_CLASSNAME);
  userForm.addEventListener("submit", onUserSubmit);
} else {
  userForm.classList.add(HIDDEN_CLASSNAME);
  showHello(savedUserName);
}
