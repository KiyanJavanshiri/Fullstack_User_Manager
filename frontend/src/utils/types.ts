export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
};

export type TApiResponse<T> = {
  success: boolean;
  status: number;
  data: T;
};

export type TPath = {
  title: string;
  path: string;
};
