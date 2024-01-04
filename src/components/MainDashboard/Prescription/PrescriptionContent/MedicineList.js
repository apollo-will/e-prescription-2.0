import MedicineAccordion from "./MedicineAccordion";
import { useReduxState } from "../../../../hooks/useReduxState";
import style from "../Prescription.module.css";
import { Accordion } from "react-bootstrap";


const MedicineList = () => {
  const currentPrescription = useReduxState(
    (state) => state.prescriptions.openPrescription
  );
  return (
    <div className={style["div-articles"]}>
      <Accordion
        defaultActiveKey={[0]}
        alwaysOpen
        id={style["div-articles-accordion"]}
      >
        {currentPrescription.medicines.map((medicine, index) => (
          <MedicineAccordion medicine={medicine} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default MedicineList
