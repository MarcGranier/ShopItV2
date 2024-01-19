import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import productRoutes from './routes/products.js';

app.use('/api/v1', productRoutes);

app.listen(process.env.PORT, () => {
	console.log(
		`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
			.blue
	);
});
