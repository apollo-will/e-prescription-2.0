import { HEADER_FORMATS, METHODS } from "../constants/services";
import serviceBind from "./helper";

export default {
  getDoctors: serviceBind({
    url: "/api/doctors?search={searchEmail}&page={pageNumber}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getPatients: serviceBind({
    url: "/api/user/{doctorId}/patients?search={searchEmail}&page={pageNumber}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
};
