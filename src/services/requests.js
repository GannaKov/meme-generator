import axios from "axios";

const BASEURL = "https://api.imgflip.com/get_memes";

const instance = axios.create({ baseURL: BASEURL });

export async function getAllMemes() {
  try {
    const { data } = await instance.get();
    console.log("in Req", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
