import { useReduxState } from "../../../hooks/useReduxState"
import NoPrescriptionContent from "./NoPrescriptionContent"
import style from "./Prescription.module.css"
import PrescriptionContent from "./PrescriptionContent/PrescriptionContent"
import { useReactToPrint } from 'react-to-print';
import React from 'react';

const Prescription = () => {
  const prescription = useReduxState(
    (state) => state.prescriptions.prescription
  )
  const isOpenPrescription = Object.keys(prescription).length > 0

  const componentRef = React.useRef(null);

  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handlePrint = useReactToPrint({
    documentTitle: "SuperFileName"
  });

  return (
    <div className={style["section-open-prescription"]}>
      <div className={style["printContent"]} ref={componentRef}>
        {isOpenPrescription ? <PrescriptionContent /> : <NoPrescriptionContent />}
      </div>
      <button onClick={() => handlePrint(reactToPrintContent)}>Download as PDF</button>
    </div>
  )
}

export default Prescription
