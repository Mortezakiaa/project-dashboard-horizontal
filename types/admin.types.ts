export type AdminRoll = "OWNER" | "ADMIN" | "USER";

export type AdminData = {
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  password: string;
  avatar: string;
  roll: AdminRoll;
  createdAt: Date;
};
