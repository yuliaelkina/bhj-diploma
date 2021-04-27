/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  let params = "";
  let formData;
  xhr.responseType = "json";
  xhr.withCredentials = true;
  console.log(options.data);
  if (options.data && options.method != "GET") {
    formData = new FormData;
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    };
  }
  else if (options.data) {
    params = "?";
    for (let item in options.data) {
      params += `${item}=${encodeURIComponent(options.data[item])}&`;
    };
  }
  else if(options.id && options.method == "GET") {
    params += `/${options.id}`;
  }
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
