import { base_url, headers } from "../../const/api";

const updateTask = async (id, data) => {
  try {
    const req = await fetch(base_url + "/post/" + id, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    const res = await req.json();
    return res;
  } catch ($exception) {
    console.error($exception);
    alert("SERVER ERROR");
  }
};

export { updateTask };
