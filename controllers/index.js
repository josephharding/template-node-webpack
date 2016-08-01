
import { fight, splash } from '../middleware/gyms'

module.exports = (router) => {
	router

		.get('/hello', (req, res, next) => {
			splash ()
			.then((data) => res.status(200).json({"data": data}))
			.fail((error) => res.status(500).json({"error": error}));
			});
}
