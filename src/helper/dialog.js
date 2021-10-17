import axios from "axios";
import {
  Dialog
} from "quasar";

function createDialog(statusCode, messages) {
  let msg = '';
  messages.forEach(message => {
    msg += message + '\n';
  })
  Dialog.create({
    title: "Error(" + statusCode + ")",
    message: msg,
  });
}

export default createDialog;
