import { Request, Response } from 'express';
import { Service } from '../database/models/Service';

//CREATE
export const createService = async (req: Request, res: Response) => {
	try {
		//1. Get information
		const {serviceName, description, image} = req.body;
	
		//2. Validate information
		if (!serviceName || !description) {
			return res.status(400).json({
				success: false,
				message: 'Name and description are required',
			});
		}

		//3. Save in the database
		const newService = await Service.create({
			service_name: serviceName,
			description: description,
			image_url: image
		}).save();

		//4. Response
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
		// 1. Get information
		const serviceIdToUpdate = req.params.id;
		const body = req.body;
		// 2. Update in database
		const serviceUpdated = await Service.update(
			{
				id: parseInt(serviceIdToUpdate),
			},
			body,
		);
		// 3. Response
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
		//1. Get information
		const serviceToDelete = Number(req.params.id);

		//2. Remove from the database
		const serviceDeleted = await Service.delete(serviceToDelete);

		if (!serviceDeleted.affected) {
			return res.status(404).json({
				success: false,
				message: "Service doesn't exist",
			});
		}

		//3. Response
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
