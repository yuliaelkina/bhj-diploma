/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = options.responseType;
  if (options.data && options.method != "GET") {
    xhr.open(`${options.method}`, `${options.url}`);
    xhr.send(options.data);
  }
  else {
    xhr.open(`${options.method}`, `${options.url}` + `?` + ``);
    xhr.send();
  };
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      console.log(this.response);
      options.callback(this.response.error, this.response);
    };
  }
}
