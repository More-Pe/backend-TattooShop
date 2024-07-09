import { Request, Response } from "express";
import { Appointment } from "../database/models/Appointment";

//CREATE
export const createAppointment = async (req: Request, res: Response) => {
  try {
    //1. Obtener info
    const appointmentDate = req.body.appointment_date;
    const userId = req.tokenData.id;
    const serviceId = req.body.service_id;

    //2. Validar info
    if (!appointmentDate || !serviceId) {
      return res.status(400).json({
        success: false,
        message: "Date and service are required",
      });
    }

    //3. Guardar en la DB
    const newAppointment = await Appointment.create({
      appointment_date: appointmentDate,
      user_id: userId,
      service_id: serviceId,
    }).save();

    //4. Responder
    res.status(201).json({
      success: true,
      message: "Appointment have been created succesfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating appointment",
      error: error,
    });
  }
};

//UPDATE
export const updateAppointment = async (req: Request, res: Response) => {
  try {
    // 1. Obtener info
    const appointmentDate = req.body.appointment_date;
    const serviceId = req.body.service_id;
    const userId = req.tokenData.id;

    // 2. Validar info
    if (!appointmentDate || !serviceId) {
      return res.status(400).json({
        success: false,
        message: "Appointment ID, date, and service are required",
      });
    }

    // 3. Buscar la cita en la DB
    const appointment = await Appointment.findOne({
      where: {
        user_id: userId,
      },
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // 4. Actualizar la cita en la DB
    appointment.appointment_date = appointmentDate;
    appointment.service_id = serviceId;
    await appointment.save();

    // 5. Responder
    res.status(200).json({
      success: true,
      message: "Appointment has been updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating appointment",
      error: error,
    });
  }
};

// READ appointment by ID
export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    // 1. Obtener el ID de la cita desde los parámetros de la URL
    const appointmentId = req.params.id;
    const userId = req.tokenData.id;

    // 2. Validar información
    if (!appointmentId) {
      return res.status(400).json({
        success: false,
        message: "Appointment Id is required",
      });
    }

    // 3. Buscar la cita en la DB
    const appointment = await Appointment.findOne({
      select: {
        id: true,
        appointment_date: true,
        user: {
          id: true,
          email: true,
        },
        service: {
          id: true,
          service_name: true,
        },
      },
      where: {
        id: parseInt(appointmentId, 10),
        user_id: userId,
      },
      relations: { user: true, service: true },
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // 4. Responder
    res.status(200).json({
      success: true,
      message: "The appointment was found: ",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving appointment",
      error: error,
    });
  }
};


//READ user appointments
export const getAllAppointmentsForUser = async (
  req: Request,
  res: Response
) => {
  try {
    // 1. Obtener el ID del usuario
    const userId = req.tokenData.id;

    // 2. Buscar todas las citas del usuario en la DB
    const appointments = await Appointment.find({
      select: {
        id: true,
        appointment_date: true,
        user: {
          id: true,
          email: true,
        },
        service: {
          id: true,
          service_name: true,
        },
      },
      where: {
        user_id: userId,
      },

      relations: { user: true, service: true }, //Dice con qué tablas relaciono para selccionar (select) la info que que quiero ver
    });
    // 3. Responder
    res.status(200).json({
      success: true,
      message: "You have reserved the following appointments: ",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving appointments",
      error: error,
    });
  }
};

// DELETE
export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    // 1. Obtener el id a eliminar
    const appointmentId = parseInt(req.body.id);
    const userId = req.tokenData.id;

    // 2. Validar que la cita existe y pertenece al usuario
    const appointmentToDelete = await Appointment.findOne({
      where: {
        id: appointmentId,
        user_id: userId,
      },
    });

    if (!appointmentToDelete) {
      return res.status(404).json({
        success: false,
        message: "Appointment doesn't exist or doesn't belong to the user",
      });
    }

    // 3. Eliminar la cita de la DB
    await Appointment.delete(appointmentId);

    // 4. Responder
    res.status(200).json({
      success: true,
      message: "Appointment was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting appointment",
      error: error,
    });
  }
};
