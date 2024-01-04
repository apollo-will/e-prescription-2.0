import { useEffect, useState } from "react"
import mockedPatients from "../../constants/mockedPatients"
import CreatePrescriptionTemplate from "./CreatePrescriptionTemplate/CreatePrescriptionTemplate"
import style from "./CreatePresscription.module.css"
import CreateMedicineForPrescriptionPopUp from "./NewMedicinePopUpForm/CreateMedicineForPrescriptionPopUp"
import PatientTable from "./PatientsTable/PatientsTable"
import { formFieldCheckFn } from "../../utils/formFieldsCheck"

const CreatePrescription = () => {
  const [isPatientChooseMode, setisPatientChooseMode] = useState(true)
  const [medicineItems, setMedicineItems] = useState([])
  const [isEditMode, setIsEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)
  const [showPopUpForm, setShowPopUpForm] = useState(false)
  const [patientsList, setPatientsList] = useState([])
  const [currentPatient, setCurrentPatient] = useState(null)

  const [formValues, setFormaValues] = useState({
    _id: "",
    medicineName: "",
    dosage: "",
    dosageType: "",
    admission: "",
    admissionType: "",
    instructions: "",
  })

  useEffect(() => {
    setPatientsList(mockedPatients)
  }, [])

  const showPopUpModal = () => {
    setFormaValues({
      medicineName: "",
      dosage: "",
      dosageType: "",
      admission: "",
      admissionType: "",
      instructions: "",
    })
    setShowPopUpForm(true)
  }

  const hidePopUpModal = () => {
    setShowPopUpForm(false)
  }

  const addMedicineHandler = (e) => {
    e.preventDefault();
    if(formFieldCheckFn(formValues)) return

    if (isEditMode) {
      setMedicineItems((prevState) =>
        prevState.map((prevItem, index) =>
          index === editIndex ? formValues : prevItem
        )
      )
      setIsEditMode(false)
      setEditIndex(-1)
    } else {
      setMedicineItems((prevState) => {
        return [...prevState, formValues]
      })
    }

    setShowPopUpForm(false)
  }

  const onChangeHandler = (e) => {
    setFormaValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onDeleteMedicineItemHandler = (index) => {
    setMedicineItems((state) => state.filter((x, i) => i !== index))
  }

  const onEditItemHandler = (index) => {
    setShowPopUpForm(true)
    setIsEditMode(true)
    setEditIndex(index)

    setFormaValues(medicineItems[index])
  }

  const hidePatientList = (id) => {
    if (id) {
      setCurrentPatient(patientsList.find((p) => p.id === id))
    }
    setisPatientChooseMode(false)
  }

  const showPatientList = () => {
    setMedicineItems([])
    setisPatientChooseMode(true)
    setCurrentPatient(null)
  }

  return isPatientChooseMode ? (
    <PatientTable
      hidePatientList={hidePatientList}
      patientsList={patientsList}
    />
  ) : (
    <div className={style["create-prescription-container"]}>
      <CreatePrescriptionTemplate
        showPopUpModal={showPopUpModal}
        medicineItems={medicineItems}
        onDeleteMedicineItemHandler={onDeleteMedicineItemHandler}
        onEditItemHandler={onEditItemHandler}
        currentPatient={currentPatient}
        showPatientList={showPatientList}
        hidePatientList={hidePatientList}
      />

      {showPopUpForm && (
        <CreateMedicineForPrescriptionPopUp
          addMedicineHandler={addMedicineHandler}
          onChangeHandler={onChangeHandler}
          hidePopUpModal={hidePopUpModal}
          formValues={formValues}
        />
      )}
    </div>
  )
}

export default CreatePrescription
