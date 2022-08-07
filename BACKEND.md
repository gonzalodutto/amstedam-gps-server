## 0. Backend Entities & Relations

### Doctors

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| email     | String    | yes      |                                 |
| onDuty    | Boolean   | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

`doctor.hasMany(models.patients)`

### Patients

| key         | data type | required | notes                             |
| ----------- | --------- | -------- | --------------------------------- |
| id          | Integer   | yes      | Already added by model:generate   |
| firstName   | String    | yes      |                                   |
| lastName    | String    | yes      |                                   |
| gender      | String    | yes      | default value is 0                |
| dateOfBirth | Date      | yes      |                                   |
| email       | String    | yes      |                                   |
| phoneNumber | Integer   | yes      |                                   |
| doctorId    | Integer   | yes      | Foreign key (references a doctor) |
| createdAt   | Date      | yes      | Already added by model:generate   |
| updatedAt   | Date      | yes      | Already added by model:generate   |

`patient.belongsTo(models.doctor)`
`patient.belongToMany(models.prescription)` **many to many**

### ❗❗ Challenge - Many to Many

> Reference: [Reader - Many to Many](https://reader.codaisseur.com/courses/backend-bootcamp/02-orm/bonus-many-to-many)

### Prescriptions

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | Array     | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

`precription.belongToMany(models.patient)`

### PatientPrescriptions

| key            | data type | required | notes                           |
| -------------- | --------- | -------- | ------------------------------- |
| id             | Integer   | yes      | Already added by model:generate |
| patientId      | Integer   | yes      | Foreign key                     |
| prescriptionId | Integer   | yes      | Foreign key                     |
| createdAt      | Date      | yes      | Already added by model:generate |
| updatedAt      | Date      | yes      | Already added by model:generate |

`patientPrescription.belongsTo(models.patient)`
`patientPrescription.belongsTo(models.prescription)`
