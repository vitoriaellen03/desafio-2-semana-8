import {
  validateEmail,
  validatePassword,
  validateName,
  validateLast,
  validateJob,
} from "./validate";
import axios from "axios";

export async function signUp() {
  const api = axios.create({
    baseURL: "http://localhost:3000/users",
  });

  const name = document.getElementById("name") as HTMLInputElement;
  const lastname = document.getElementById("lastname") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const job = document.getElementById("jobPosition") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;

  const today = new Date();

  function createUser() {
    if (
      validateEmail() &&
      validatePassword() &&
      validateName() &&
      validateLast() &&
      validateJob()
    ) {
      api
        .post("", {
          id: Math.floor(Math.random() * 1000),
          firstName: name.value,
          lastname: lastname.value,
          user: "@"+ name.value + lastname.value,
          creationDate: today.toLocaleDateString(),
          email: email.value,
          role: job.value,
          password: password.value,
        })
        .then((response) => {
          console.log(response);
          location.pathname = "/kanban";
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  await createUser();
}
