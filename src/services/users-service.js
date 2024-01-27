import { HEADER_FORMATS, METHODS } from "../constants/services";
import serviceBind from "./helper";

export default {
  // Patient endpoints
  getProfile: serviceBind({
    url: "/api/auth/profile/{id}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),

  getPatientProfile: serviceBind({
    url: "/api/patients/{patientId}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),

  getPatientPrescriptions: serviceBind({
    url: "/api/patients/{patientId}/persriptions",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),

  // Pharmacist endpoint
  getPharmacists: serviceBind({
    url: "/api/pharmacists",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  getPharmacistById: serviceBind({
    url: "/api/pharmacists/{pharmacistId}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
};
