export default function({ app }) {
  const request = app.$axios.create({
    timeout: 60000,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      terminal: "PC"
    },
    withCredentials: true
  });

  request.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  );

  request.interceptors.response.use(
    response => {
      if (/^[4|5]/.test(response.status)) {
        return Promise.reject(response.statusText);
      }
      return response.data;
    },
    error => Promise.reject(error)
  );

  // post请求
  const postRequest = ({ url, params }) =>
    request({
      method: "POST",
      url,
      data: params
    });
  // get请求
  const getRequest = ({ url, params }) =>
    request({
      method: "GET",
      url,
      params
    });

  app.postRequest = postRequest;
  app.getRequest = getRequest;
}
