import axios from "axios";

export function login(data) {
  console.log({ ...data });
  return axios
    .post("http://localhost:5000/api/user/login", { ...data })
    .then((res) => res.data);
}
