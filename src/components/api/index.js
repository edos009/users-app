export const loadUser = () => {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
};
