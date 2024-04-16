export const isUserLogin = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  return user.email && user.token;
};
