import axios from "axios";
import { layoutAction } from "./redux/features/layout";
import { store } from "./redux/store";

const Http = axios.create();

Http.interceptors.request.use(
  function (config) {
    store.dispatch(layoutAction.isLoading());
    return config;
  },
  function (error) {
    store.dispatch(layoutAction.isLoaded());
    store.dispatch(layoutAction.isError(error.message));
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  function (response) {
    store.dispatch(layoutAction.isLoaded());
    return response;
  },
  function (error) {
    store.dispatch(layoutAction.isLoaded());
    store.dispatch(layoutAction.isError(error.message));
    return Promise.reject(error);
  }
);

export default Http;
