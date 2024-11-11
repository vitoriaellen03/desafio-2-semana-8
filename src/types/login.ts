import axios from "axios";

export function validateUser() {
  const email = document.getElementById("email") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;

  axios
    .get("http://localhost:3000/users")
    .then((response) => {
      const users = response.data;

      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === email.value && u.password === password.value
      );

      if (user) {
        location.pathname = "/kanban";
      } else {
        location.pathname = "/BlockedPage";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
