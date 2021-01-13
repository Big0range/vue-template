const devBaseURL = "https://www.limeichao.cn/";
const proBaseURL = "https://www.limeichao.cn/";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
