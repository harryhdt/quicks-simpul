import { base_url, headers } from "../../const/api";

const getAllTasks = async () => {
  try {
    const req = await fetch(base_url + "/post?created=1", {
      method: "GET",
      headers,
    });
    const res = await req.json();
    if (res.data) {
      return res.data;
    } else {
      return [];
    }
  } catch ($exception) {
    console.error($exception);
    return [];
  }
};

export { getAllTasks };
