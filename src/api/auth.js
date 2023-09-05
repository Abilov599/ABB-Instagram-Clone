import userApi from "./";

async function registerUser(userData) {
  try {
    const res = await userApi.post("/auth/register", userData);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function loginUser(credentials) {
  try {
    const res = await userApi.post("/auth/login", credentials);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export { registerUser, loginUser };
