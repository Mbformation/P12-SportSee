// Fonction utils pour recuperer les informations des utilisateurs

export const getUserInfo = async (data) => {
  const endpoints = Object.values(data);
  const fetchedData = await Promise.all(
    endpoints.map((url) =>
      fetch(url)
        .then((res) => {
          if (res.status != 200) {
            throw new Response("acc", { status: res.status });
          }
          return res.json();
        })
        .catch((error) => {
          console.log(error);
          throw new Response("error", error);
        })
    )
  );

  return fetchedData;
};
