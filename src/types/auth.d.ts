declare interface IAdmin {
  accessToken: string;
}


declare interface IRefreshResponse {
  data: { accessToken: string };
}