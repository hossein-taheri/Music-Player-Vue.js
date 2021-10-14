import axios from "axios";
import {
  Loading,
  QSpinnerTail
} from "quasar";
import createDialog from "../helper/dialog";

const BASE_URL = "http://192.168.1.103:3000/";
const BASE_API_URL = BASE_URL + "api/";

const RequestHelper = {
  BASE_URL,
  BASE_API_URL,
  send: function (method, url, body, query = {}) {
    return new Promise((resolve, reject) => {
      Loading.show({
        spinner: QSpinnerTail
      })

      axios({
        method,
        url: BASE_API_URL + url,
        data: body,
        params: query
      })
        .then(response => {
          Loading.hide();
          handleResponse(response, resolve, reject);
        })
        .catch(err => {
          Loading.hide()
          createDialog(
            500,
            ['There is a connection problem']
          )
          reject(err)
        })
    })
  },
  uploadImage: function (imageFile) {
    return new Promise((resolve, reject) => {
      const bodyFormData = new FormData();
      bodyFormData.append('image', imageFile);

      RequestHelper
        .send(
          'post',
          '/upload/image/',
          bodyFormData,
        )
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  uploadAudio: function (audioFile) {
    return new Promise((resolve, reject) => {
      const bodyFormData = new FormData();
      bodyFormData.append('audio', audioFile);

      RequestHelper
        .send(
          'post',
          '/upload/audio/',
          bodyFormData,
        )
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })
    })
  },
}
export default RequestHelper

function handleResponse(response, resolve, reject) {
  switch (response.data.status) {
    case 200 :
    case 201 :
      resolve(response.data.data);
      break;
    default :
      createDialog(
        response.data.status,
        response.data.messages
      )
      reject(response.data.messages)
      break;
  }
}
