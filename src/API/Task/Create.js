import { base_url, headers } from "../../const/api";

const addTask = async () => {
  let body = {
    text: "Task baru",
    image: "",
    likes: 0,
    tags: [],
    owner: "60d0fe4f5311236168a109d0",
  };
  try {
    const req = await fetch(base_url + "/post/create", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const res = await req.json();
    return res;
  } catch ($exception) {
    console.error($exception);
    alert("SERVER ERROR");
  }
};

export { addTask };
