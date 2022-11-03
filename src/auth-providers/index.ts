import { AuthProvider } from "@pankod/refine-core";

export const authProvider: AuthProvider = {
  login: async (...args) => {
    console.log({ args });
    localStorage.setItem("isLoggedIn", "true");
    return "success";
  },
  logout: async () => {
    localStorage.removeItem("isLoggedIn");
    return "success";
  },
  checkAuth: async () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      return true;
    }
    throw new Error("not logged in");
  },
  checkError: async () => {},
  getPermissions: async () => {},
};
