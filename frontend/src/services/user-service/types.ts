export interface IGetMeResponse {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  rememberPassword: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
