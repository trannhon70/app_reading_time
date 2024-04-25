export const LocalStore = {
  getUserLocalStore: () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = window.localStorage.getItem("user");
      return userSession ? JSON.parse(userSession) : null;
    }
    return null;
  },
  gettokenLocalStore: () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = window.localStorage.getItem("token");
      return userSession ? JSON.parse(userSession) : null;
    }
    return null;
  },
  setUserLocalStore: (data: any) => {
    localStorage?.setItem("user", JSON.stringify(data));
  },
  setTokenLocalStore: (data: any) => {
    localStorage?.setItem("token", JSON.stringify(data));
  },
};
