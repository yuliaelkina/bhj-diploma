/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  let params = "";
  let formData;
  xhr.responseType = "json";
  if (options.data && options.method != "GET") {
    formData = new FormData;
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    };
  }
  else {
    params = "?";
    for (let item in options.data) {
      params += `${item[0]}=${encodeURIComponent(item[1])}&`;
    };
  };
  try {
    xhr.open(options.method, options.url + params);
    xhr.send(formData);
  }
   catch(e) {
    const err = new Error(e);
    options.callback(err);
  }
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      options.callback(null, this.response);
    };
  }
}
