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
/**
 * response.Success Rank
 */
export interface ResponseRank {
  data: ResponseRanking;
  msg?: string;
}

/**
* response.Ranking
*/
export interface ResponseRanking {
  leaderboard: Ranks[];
}

/**
* model.Leaderboard
*/
export interface Ranks {
  avatar_url?: string;
  score?: number;
  user_id?: number;
  user_name?: string;
}