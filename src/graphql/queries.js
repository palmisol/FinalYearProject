/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookingSystem = /* GraphQL */ `
  query GetBookingSystem($id: ID!) {
    getBookingSystem(id: $id) {
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
export const listBookingSystems = /* GraphQL */ `
  query ListBookingSystems(
    $filter: ModelBookingSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingSystems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        appointment_id
        clinic_id
        time
        date
        band
        time_created
      }
      nextToken
    }
  }
`;
export const getAppointmentSystem = /* GraphQL */ `
  query GetAppointmentSystem($id: ID!) {
    getAppointmentSystem(id: $id) {
      appointment_id
      decription
      name
      time_created
    }
  }
`;
export const listAppointmentSystems = /* GraphQL */ `
  query ListAppointmentSystems(
    $filter: ModelAppointmentSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentSystems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        appointment_id
        decription
        name
        time_created
      }
      nextToken
    }
  }
`;
export const getClinicsSystem = /* GraphQL */ `
  query GetClinicsSystem($id: ID!) {
    getClinicsSystem(id: $id) {
      clinics_id
      address
      Website
      Description
      phone
    }
  }
`;
export const listClinicsSystems = /* GraphQL */ `
  query ListClinicsSystems(
    $filter: ModelClinicsSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicsSystems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        clinics_id
        address
        Website
        Description
        phone
      }
      nextToken
    }
  }
`;
