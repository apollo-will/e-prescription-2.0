import PatientFieldsComponent from './ProfileFields/PatientFieldsComponent';
import DoctorFieldsComponent from './ProfileFields/DoctorFieldsComponent';
import PharmacistFieldsComponent from './ProfileFields/PharmacistFieldsComponent';
import { useState } from 'react';

const RegisterFormComponent = () => {
  const ProfileFields = {
    patient: <PatientFieldsComponent/>,
    doctor: <DoctorFieldsComponent/>,
    pharmacist: <PharmacistFieldsComponent/>
  }
  const [profile, setProfile] = useState('patient')

  return (
    <>
      {/* <!-- Icon --> */}

      <form>
        <input
          type="text"
          id="firstName"
          className="fadeIn second"
          name="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName"
          className="fadeIn third"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          type="text"
          id="email"
          className="fadeIn third"
          name="email"
          placeholder="Email"
        />
        <select onChange={(e)=>setProfile(e.target.value)} class="form-select fadeIn third" aria-label="Default select example  ">
          <option value="patient">Patient</option>
          <option value="pharmacist">Pharmacist</option>
          <option value="doctor">Doctor</option>
        </select>
        {
          ProfileFields[profile]
        }


    

        <input type="submit" className="fadeIn fourth" value="Register" />
      </form>
    </>
  );
};

export default RegisterFormComponent;
