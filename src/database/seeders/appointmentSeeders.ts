import { AppDataSource } from "../db";
import { Appointment } from "../models/Appointment";

export const appointmentSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const appointment1 = new Appointment();
    appointment1.id = 1;
    appointment1.appointment_date = new Date("2024-04-02T09:00:00.000Z");
    appointment1.user_id = 3;
    appointment1.service_id = 1;
    await appointment1.save();

    const appointment2 = new Appointment();
    appointment2.id = 2;
    appointment2.appointment_date = new Date("2024-04-02T10:00:00.000Z");
    appointment2.user_id = 4;
    appointment2.service_id = 2;
    await appointment2.save();

    const appointment3 = new Appointment();
    appointment3.id = 3;
    appointment3.appointment_date = new Date("2024-04-02T10:20:00.000Z");
    appointment3.user_id = 4;
    appointment3.service_id = 3;
    await appointment3.save();

    const appointment4 = new Appointment();
    appointment4.id = 4;
    appointment4.appointment_date = new Date("2024-04-02T11:00:00.000Z");
    appointment4.user_id = 5;
    appointment4.service_id = 4;
    await appointment4.save();

    const appointment5 = new Appointment();
    appointment5.id = 5;
    appointment5.appointment_date = new Date("2024-04-02T11:30:00.000Z");
    appointment5.user_id = 5;
    appointment5.service_id = 5;
    await appointment5.save();

    const appointment6 = new Appointment();
    appointment6.id = 6;
    appointment6.appointment_date = new Date("2024-04-02T12:00:00.000Z");
    appointment6.user_id = 6;
    appointment6.service_id = 1;
    await appointment6.save();

    const appointment7 = new Appointment();
    appointment7.id = 7;
    appointment7.appointment_date = new Date("2024-04-02T12:20:00.000Z");
    appointment7.user_id = 6;
    appointment7.service_id = 2;
    await appointment7.save();

    const appointment8 = new Appointment();
    appointment8.id = 8;
    appointment8.appointment_date = new Date("2024-04-02T13:00:00.000Z");
    appointment8.user_id = 7;
    appointment8.service_id = 3;
    await appointment8.save();

    const appointment9 = new Appointment();
    appointment9.id = 9;
    appointment9.appointment_date = new Date("2024-04-02T13:30:00.000Z");
    appointment9.user_id = 7;
    appointment9.service_id = 4;
    await appointment9.save();

    const appointment10 = new Appointment();
    appointment10.id = 10;
    appointment10.appointment_date = new Date("2024-04-02T14:00:00.000Z");
    appointment10.user_id = 8;
    appointment10.service_id = 5;
    await appointment10.save();

    const appointment11 = new Appointment();
    appointment11.id = 11;
    appointment11.appointment_date = new Date("2024-04-02T14:20:00.000Z");
    appointment11.user_id = 8;
    appointment11.service_id = 1;
    await appointment11.save();

    const appointment12 = new Appointment();
    appointment12.id = 12;
    appointment12.appointment_date = new Date("2024-04-02T15:00:00.000Z");
    appointment12.user_id = 9;
    appointment12.service_id = 2;
    await appointment12.save();

    const appointment13 = new Appointment();
    appointment13.id = 13;
    appointment13.appointment_date = new Date("2024-04-02T15:30:00.000Z");
    appointment13.user_id = 9;
    appointment13.service_id = 3;
    await appointment13.save();

    const appointment14 = new Appointment();
    appointment14.id = 14;
    appointment14.appointment_date = new Date("2024-04-02T16:00:00.000Z");
    appointment14.user_id = 10;
    appointment14.service_id = 4;
    await appointment14.save();

    const appointment15 = new Appointment();
    appointment15.id = 15;
    appointment15.appointment_date = new Date("2024-04-02T16:30:00.000Z");
    appointment15.user_id = 10;
    appointment15.service_id = 5;
    await appointment15.save();

    console.log("=======================================");
    console.log("Appointments seeder successfully");
    console.log("=======================================");

  } catch (error: any) {
    console.log("=======================================");
    console.log("ERROR APPOINTMENTS SEEDER", error.message);
    console.log("=======================================");

  } finally {
    await AppDataSource.destroy();
  }
};
