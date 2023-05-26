import axios from "axios";
import { IUser } from "../interfaces/user";


export const getAllUsers = async () : Promise<IUser> => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const user : IUser = await res.data;
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const getUser = async (id: number) => {
  try {
    const res = await axios.get(`${process.env.FAKE_API}/users/${id}`);
    const user = await res.data;
    return user;
  } catch (err) {
    console.log(err);
  }
};
