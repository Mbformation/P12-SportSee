export const getUserInfo = async (data) => {
  const endpoints = Object.values(data);
  const fetchedData = await Promise.all(
    endpoints.map((url) =>
      fetch(url)
        .then((res) => res.json())
        .catch((error) => {
          console.error("Error:", error);
        })
    )
  );
  return fetchedData;
};
