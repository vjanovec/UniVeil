import axios from "axios";

export const getAllPostsAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const posts = await axios({
        method: "get",
        url: "http://localhost:8888/api/v1/posts/",
      });
      resolve(posts);
    } catch (err) {
      reject(err);
    }
  });
};