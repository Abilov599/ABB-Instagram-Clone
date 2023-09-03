import userApi from "./";

// async function getUsers() {
//   try {
//     const res = await userApi.get(`/users`);
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// }

async function getUserByUserName(username) {
  try {
    const res = await userApi.get(`/?username=${username}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getUserFeed() {
  try {
    const res = await userApi.get(`/user/feed`);
    return res.data.data;
  } catch (err) {
    console.error(err);
  }
}

export { getUserFeed, getUserByUserName };
