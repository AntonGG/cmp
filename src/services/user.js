import config from "../configs/config";

//Запрашиваем баланс cmp, партнеров и кошельки
export const getWallets = async () => {
  const resp = await fetch(`${config.url}/users/getWallets/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ token: localStorage.getItem("token") }),
  });
  const json = await resp.json();
  if (json) {
    console.log(json);
    return json;
  } else {
    return false;
  }
};