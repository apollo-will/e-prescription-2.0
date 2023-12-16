import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css";


export const PatientFields = [
  {name: 'patientId', classes: [style["fadeIn"], style["fourth"]].join(' '), fieldType: 'text', option: undefined},
  {name: 'gender', classes: [style["form-select"], style["fadeIn"], style["fourth"]].join(" "), fieldType: 'select', options: [{text: "Male", value: "male"}, {text: "Female", value: "female"}]},
  {name: 'dateOfBirth', classes: [style["fadeIn"], style["fourth"]].join(" "), fieldType: 'date', option: undefined},
]

const PatientFieldsComponent = ({handleChange, registrationFormData}) => {
  return (
    <>
      <Form.Control
        type="text"
        id="patientId"
        className={[style["fadeIn"], style["fourth"]].join(" ")}
        name="patientId"
        placeholder="PatientId"
        required
        value={registrationFormData?.patientId || ""}
        onChange={handleChange}
      />

      <select
        className={[
          style["form-select"],
          style["fadeIn"],
          style["fourth"],
        ].join(" ")}
        aria-label="Default select example"
        name="gender"
        value={registrationFormData?.gender || ""}
        onChange={handleChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <Form.Control
        type="date"
        id="dateOfBirth"
        className={[style["fadeIn"], style["fourth"]].join(" ")}
        name="dateOfBirth"
        placeholder="Date Of Birth"
        required
        value={registrationFormData?.dateOfBirth || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default PatientFieldsComponent;
