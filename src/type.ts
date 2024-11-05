/**
 * @给发后端发送获取到的code
 */

export interface ResponseLogin {
  data: ResponseCallBack;
  msg?: string;
}

/**
 * response.CallBack
 */
export interface ResponseCallBack {
  token?: string;
}
