import SyncStorage from "sync-storage";

export const LocalStore = {
  getUserLocalStore: () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = SyncStorage.get("infoUser");
      return userSession ? JSON.parse(userSession) : null;
    }
    return null;
  },
  gettokenLocalStore: () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = SyncStorage.get("token");
      return userSession ? JSON.parse(userSession) : null;
    }
    return null;
  },
  setUserLocalStore: (data: any) => {
    SyncStorage?.set("infoUser", JSON.stringify(data));
  },
  setTokenLocalStore: (data: any) => {
    SyncStorage?.set("token", JSON.stringify(data));
  },
};
