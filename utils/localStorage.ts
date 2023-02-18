// utils/localStorage.ts

import {IUser} from "@/types/userTypes";

const USER_KEY = "user";

export function saveUser(user: IUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser(): IUser | null {
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
}

export function clearUser() {
  localStorage.removeItem(USER_KEY);
}
