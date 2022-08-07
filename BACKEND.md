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

npx sequelize-cli model:generate --name doctor --attributes name:string,email:string,onDuty:boolean

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

npx sequelize-cli model:generate --name patient --attributes firstName:string,lastName:string,gender:string,dateOfBirth:date,email:string,phoneNumber:integer,doctorId:integer

`patient.belongsTo(models.doctor)`
`patient.belongToMany(models.prescription)` **many to many**

### ❗❗ Challenge - Many to Many

> Reference: [Reader - Many to Many](https://reader.codaisseur.com/courses/backend-bootcamp/02-orm/bonus-many-to-many)

### Prescriptions

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

npx sequelize-cli model:generate --name prescription --attributes name:String

`precription.belongToMany(models.patient)`

### PatientPrescriptions

| key            | data type | required | notes                           |
| -------------- | --------- | -------- | ------------------------------- |
| id             | Integer   | yes      | Already added by model:generate |
| patientId      | Integer   | yes      | Foreign key                     |
| prescriptionId | Integer   | yes      | Foreign key                     |
| createdAt      | Date      | yes      | Already added by model:generate |
| updatedAt      | Date      | yes      | Already added by model:generate |

npx sequelize-cli model:generate --name PatientPrescription --attributes patientId:Integer,prescriptionId:Integer

`patientPrescription.belongsTo(models.patient)`
`patientPrescription.belongsTo(models.prescription)`
