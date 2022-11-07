import { base_url, headers } from "../../const/api";

const deleteTask = async (id) => {
  try {
    const req = await fetch(base_url + "/post/" + id, {
      method: "DELETE",
      headers,
    });
    const res = await req.json();
    return res;
  } catch ($exception) {
    console.error($exception);
    alert("SERVER ERROR");
  }
};

export { deleteTask };
