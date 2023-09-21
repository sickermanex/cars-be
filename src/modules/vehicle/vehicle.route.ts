import { FastifyInstance } from "fastify";
import { createVehicleHandler, getVehiclesHandler, updateVehiclesHandler } from "./vehicle.controller";

const vehicleRoutes = async (server: FastifyInstance, options: unknown) => {
  server.get('/vehicles', getVehiclesHandler);
  server.put('/vehicles/:id', updateVehiclesHandler);
  server.post('/vehicles', createVehicleHandler);
};

export default vehicleRoutes;