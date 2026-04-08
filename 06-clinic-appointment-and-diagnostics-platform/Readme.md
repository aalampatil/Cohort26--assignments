![alt text](design.png)

```JS
doctors [icon: user-md, color: blue] {
  id int pk
  name string
  email string
  phone string
  profile string
  experience int
  highestQualification string
  medicalExamRank int
  consultationFee float
  specialty_id int fk
  created_at timestamp
  updated_at timestamp
}

specialties [icon: briefcase, color: blue] {
  id int pk
  name string
  description string
}

patients [icon: user, color: teal] {
  id int pk
  name string
  age int
  email string
  phone string
  city string
  state string
  country string
  created_at timestamp
}

appointments [icon: calendar, color: purple] {
  id int pk
  patient_id int fk
  doctor_id int fk
  date date
  time time
  status string
  rescheduled boolean
  notes string
  created_at timestamp
  updated_at timestamp
}

consultations [icon: stethoscope, color: green] {
  id int pk
  appointment_id int fk
  patient_id int fk
  doctor_id int fk
  symptoms string
  diagnosis string
  notes string
  created_at timestamp
}

diagnosticTests [icon: flask, color: yellow] {
  id int pk
  name string
  type string
  description string
  price float
  created_at timestamp
}

prescribedTests [icon: clipboard, color: orange] {
  id int pk
  consultation_id int fk
  diagnosticTest_id int fk
  status string
  prescribed_at timestamp
}

reports [icon: file-text, color: orange] {
  id int pk
  prescribedTest_id int fk
  patient_id int fk
  doctor_id int fk
  results text
  remarks string
  generated_at timestamp
}

payments [icon: credit-card, color: red] {
  id int pk
  patient_id int fk
  appointment_id int fk
  type string
  amount float
  status string
  paid_at timestamp
}

specialties.id < doctors.specialty_id
patients.id < appointments.patient_id
doctors.id < appointments.doctor_id
appointments.id < consultations.appointment_id
patients.id < consultations.patient_id
doctors.id < consultations.doctor_id
consultations.id < prescribedTests.consultation_id
diagnosticTests.id < prescribedTests.diagnosticTest_id
prescribedTests.id < reports.prescribedTest_id
patients.id < reports.patient_id
doctors.id < reports.doctor_id
patients.id < payments.patient_id
appointments.id < payments.appointment_id
```
