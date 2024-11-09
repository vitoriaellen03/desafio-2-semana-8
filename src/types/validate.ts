export function validateEmail(): boolean {
  const email = document.getElementById("email") as HTMLInputElement;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

  if (!emailRegex.test(email.value)) {
    email.classList.add("erro");
    return false;
  } else {
    email.classList.remove("erro");
    return true;
  }
}

export function validatePassword(): boolean {
  const password = document.getElementById("password") as HTMLInputElement;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/i;
  const span = document.getElementById("spanError") as HTMLSpanElement;

  if (!passwordRegex.test(password.value)) {
    span.classList.add("erro-message");
    span.classList.remove("hidden");
    password.classList.add("erro");
    return false;
  } else {
    password.classList.remove("erro");
    span.classList.remove("erro-message");
    span.classList.add("hidden");
    return true;
  }
}

export function validateName(): boolean {
  const name = document.getElementById("name") as HTMLInputElement;
  const nameRegex = /^[A-ZÁ-Úa-zá-ú\s]+$/i;
  const span = document.getElementById("nameError") as HTMLSpanElement;

  if (name.value.length > 2 && nameRegex.test(name.value)) {
    name.classList.remove("erro");
    span.classList.remove("erro-message");
    span.classList.add("hidden");
    return true;
  } else {
    span.classList.add("erro-message");
    span.classList.remove("hidden");
    name.classList.add("erro");
    return false;
  }
}

export function validateLast(): boolean {
  const lastname = document.getElementById("lastname") as HTMLInputElement;
  const lastRegex = /^[A-ZÁ-Úa-zá-ú\s]+$/i;
  const lastspan = document.getElementById("lastError") as HTMLSpanElement;

  if (lastname.value.length > 2 && lastRegex.test(lastname.value)) {
    lastname.classList.remove("erro");
    lastspan.classList.remove("erro-message");
    lastspan.classList.add("hidden");
    return true;
  } else {
    lastspan.classList.add("erro-message");
    lastspan.classList.remove("hidden");
    lastname.classList.add("erro");
    return false;
  }
}

export function validateJob(): boolean {
  const job = document.getElementById("jobPosition") as HTMLInputElement;
  const jobRegex = /^[A-ZÁ-Úa-zá-ú\s]+$/i;
  const jobspan = document.getElementById("jobError") as HTMLSpanElement;

  if (job.value.length > 4 && jobRegex.test(job.value)) {
    job.classList.remove("erro");
    jobspan.classList.remove("erro-message");
    jobspan.classList.add("hidden");
    return true;
  } else {
    jobspan.classList.add("erro-message");
    jobspan.classList.remove("hidden");
    job.classList.add("erro");
    return false;
  }
}
