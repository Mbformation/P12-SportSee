export const formatUserInfo = (data) => {
  if ("todayScore" in data) {
    return {
      ...data,
      score: data.todayScore,
    };
  } else {
    return data;
  }
};
