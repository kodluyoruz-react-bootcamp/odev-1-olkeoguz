import axios from 'axios';

export default async function getData(userId) {
  try {
    //getting the user and the posts data
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return { user, posts };
  } catch (error) {
    console.log(error.message);
  }
}
