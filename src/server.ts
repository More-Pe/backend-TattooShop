import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './database/db';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import servicesRouter from './routes/serviceRouter';
import appointmentsRouter from './routes/appointmentRouter';
import rolesRouter from './routes/roleRouter';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/services', servicesRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/roles', rolesRouter);

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
	.then(() => {
		console.log('Database connected');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});

