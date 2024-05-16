// Fontion mock pour récupérer les données générales des utilisateurs
export const getMockedMainData = (data) => {
  const endpoints = Object.values(data);
  const sampleUrl = endpoints[0];
  let userId = null;
  userId = sampleUrl.split("/").slice(-2)[0];
  if (userId === "user") {
    const pathSegments = sampleUrl.split("/");
    userId = pathSegments.slice(-1)[0];
  }

  return new Promise((resolve, reject) => {
    if (userId === "12") {
      resolve([
        {
          data: {
            id: 12,
            userInfos: {
              firstName: "Karl",
              lastName: "Dovineau",
              age: 31,
            },
            todayScore: 0.12,
            keyData: {
              calorieCount: 1930,
              proteinCount: 155,
              carbohydrateCount: 290,
              lipidCount: 50,
            },
          },
        },
      ]);
    } else if (userId === "18") {
      resolve([
        {
          data: {
            id: 18,
            userInfos: {
              firstName: "Cecilia",
              lastName: "Ratorez",
              age: 34,
            },
            score: 0.3,
            keyData: {
              calorieCount: 2500,
              proteinCount: 90,
              carbohydrateCount: 150,
              lipidCount: 120,
            },
          },
        },
      ]);
    } else {
      reject(new Error("Invalid user ID"));
    }
  });
};
