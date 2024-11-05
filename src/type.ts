/**
 * @给发后端发送获取到的code
 */
export interface ResponseLogin {
  data?: null;
  msg?: string;
  Data: ResponseCallBack;
}
/**
 * response.CallBack
 */
export interface ResponseCallBack {
  user_id: number;
}
