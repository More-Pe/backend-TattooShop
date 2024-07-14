import { Request, Response } from 'express';
import { Service } from '../database/models/Service';

//CREATE
export const createService = async (req: Request, res: Response) => {
	try {
		//1. Obtener info
		const serviceName = req.body.service_name;
		const description = req.body.description;

		//2. Validar info
		if (!serviceName || !description) {
			return res.status(400).json({
				success: false,
				message: 'Name and description are required',
			});
		}

		//3. Guardar en la DB
		const newService = await Service.create({
			service_name: serviceName,
			description: description,
		}).save();

		//4. Responder
		res.status(201).json({
			success: true,
			message: 'Service have been created succesfully',
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error creating service',
			error: error,
		});
	}
};

//READ
export const getAllServices = async (req: Request, res: Response) => {
	try {
		//1. Recupero info
		const service = await Service.find();

		res.json({
			success: true,
			message: 'All services retrieved succesfully',
			data: service,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error getting services',
			error: error,
		});
	}
};

//UPDATE
export const updateService = async (req: Request, res: Response) => {
	try {
		// 1. Recuperar la info
		const serviceIdToUpdate = req.params.id;
		const body = req.body;
		// 2. Validar la info (no es necesario)
		// 3. Tratar la info si es necesario (no)
		// 4. Actualizar en DB
		const serviceUpdated = await Service.update(
			{
				id: parseInt(serviceIdToUpdate),
			},
			body,
		);
		// 5. Responder
		res.status(200).json({
			success: true,
			message: 'Service updated succesfully',
			data: serviceUpdated,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Service cannot be updated',
			error: error,
		});
	}
};

//DELETE
export const deleteService = async (req: Request, res: Response) => {
	try {
		//1. Obtener el id a eliminar
		const serviceToDelete = Number(req.params.id);

		//2. Eliminar de la DB
		const serviceDeleted = await Service.delete(serviceToDelete);

		if (!serviceDeleted.affected) {
			return res.status(404).json({
				success: false,
				message: "Service doesn't exist",
			});
		}

		//3. Responder
		res.status(200).json({
			succes: true,
			message: 'Service was deleted succesfully',
			data: serviceDeleted,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error deleting service',
			error: error,
		});
	}
};
