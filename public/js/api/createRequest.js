/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  console.log(options.data);
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  if (options.data && options.method != "GET") {
    const formData = new FormData;
    for (let key in options.data) {
      console.log(key, options.data[key]);
      formData.append(key, options.data[key]);
    };
    xhr.open(`${options.method}`, `${options.url}`);
    xhr.send(formData);
  }
  else {
    const params = "?";
    for (let item in options.data) {
      params += `${item[0]}=${encodeURIComponent(item[1])}&`;
    };
    xhr.open(`${options.method}`, `${options.url}` + params);
    xhr.send();
  };
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      options.callback(this.response.error, this.response);
    };
  }
}
