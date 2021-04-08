/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = options.responseType;
  if (options.data && options.method != "GET") {
    xhr.open(`${options.method}`, `${options.url}`);
    xhr.send(`${option.data}`);
  }
  else {
    xhr.open(`${options.method}`, `${options.url}` + `?` + ``);
    xhr.send();
  };
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState === 4) {
      console.log(xhr.responseText);
    };
  }
}
