import { API_REQUEST, API_SUCCESS, API_FAILURE } from "../constants";

export const apiRequest = ({ payload, variables, feature }) => ({
  type: `${feature}/${API_REQUEST}`,
  payload: payload,
  meta: { variables, feature },
});

export const apiSuccess = ({ data, feature }) => ({
  type: `${feature}/${API_SUCCESS}`,
  payload: data,
  meta: { feature },
});

export const apiFailure = ({ error, feature }) => ({
  type: `${feature}/${API_FAILURE}`,
  payload: error,
  meta: { feature },
});
