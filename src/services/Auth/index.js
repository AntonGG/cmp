import config from "../../configs/config";

export const getMnemonic = async () => {
  const resp = await fetch(`http://${config.url}/users/get_mnemonic`, {
    method: "get",
  });
  const json = await resp.json();
  return json;
};
export const signUp = async () => {
  //await fetch("");
  return true;
};
