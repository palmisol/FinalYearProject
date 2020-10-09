/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookingSystem = /* GraphQL */ `
  mutation CreateBookingSystem(
    $input: CreateBookingSystemInput!
    $condition: ModelBookingSystemConditionInput
  ) {
    createBookingSystem(input: $input, condition: $condition) {
      id
      user_id
      appointment_id
      clinic_id
      time
      date
      band
      time_created
    }
  }
`;
export const updateBookingSystem = /* GraphQL */ `
  mutation UpdateBookingSystem(
    $input: UpdateBookingSystemInput!
    $condition: ModelBookingSystemConditionInput
  ) {
    updateBookingSystem(input: $input, condition: $condition) {
      id
      user_id
      appointment_id
      clinic_id
      time
      date
      band
      time_created
    }
  }
`;
export const deleteBookingSystem = /* GraphQL */ `
  mutation DeleteBookingSystem(
    $input: DeleteBookingSystemInput!
    $condition: ModelBookingSystemConditionInput
  ) {
    deleteBookingSystem(input: $input, condition: $condition) {
      id
      user_id
      appointment_id
      clinic_id
      time
      date
      band
      time_created
    }
  }
`;
export const createAppointmentSystem = /* GraphQL */ `
  mutation CreateAppointmentSystem(
    $input: CreateAppointmentSystemInput!
    $condition: ModelAppointmentSystemConditionInput
  ) {
    createAppointmentSystem(input: $input, condition: $condition) {
      appointment_id
      decription
      name
      time_created
    }
  }
`;
export const updateAppointmentSystem = /* GraphQL */ `
  mutation UpdateAppointmentSystem(
    $input: UpdateAppointmentSystemInput!
    $condition: ModelAppointmentSystemConditionInput
  ) {
    updateAppointmentSystem(input: $input, condition: $condition) {
      appointment_id
      decription
      name
      time_created
    }
  }
`;
export const deleteAppointmentSystem = /* GraphQL */ `
  mutation DeleteAppointmentSystem(
    $input: DeleteAppointmentSystemInput!
    $condition: ModelAppointmentSystemConditionInput
  ) {
    deleteAppointmentSystem(input: $input, condition: $condition) {
      appointment_id
      decription
      name
      time_created
    }
  }
`;
export const createClinicsSystem = /* GraphQL */ `
  mutation CreateClinicsSystem(
    $input: CreateClinicsSystemInput!
    $condition: ModelClinicsSystemConditionInput
  ) {
    createClinicsSystem(input: $input, condition: $condition) {
      clinics_id
      address
      Website
      Description
      phone
    }
  }
`;
export const updateClinicsSystem = /* GraphQL */ `
  mutation UpdateClinicsSystem(
    $input: UpdateClinicsSystemInput!
    $condition: ModelClinicsSystemConditionInput
  ) {
    updateClinicsSystem(input: $input, condition: $condition) {
      clinics_id
      address
      Website
      Description
      phone
    }
  }
`;
export const deleteClinicsSystem = /* GraphQL */ `
  mutation DeleteClinicsSystem(
    $input: DeleteClinicsSystemInput!
    $condition: ModelClinicsSystemConditionInput
  ) {
    deleteClinicsSystem(input: $input, condition: $condition) {
      clinics_id
      address
      Website
      Description
      phone
    }
  }
`;
