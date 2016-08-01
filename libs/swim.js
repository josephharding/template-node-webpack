
import q from 'q';

export const getPool = () => {
	let deferred = q.defer();
	setTimeout(() => {
		deferred.resolve("blue");
	}, 1000);
	return deferred.promise;
};
