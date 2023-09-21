import { FastifyReply, FastifyRequest } from "fastify";
import { createVehicle, getVehicles, updateVehicle } from "./vehicle.service";

const getVehiclesHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const vehicles = await getVehicles();
    return reply.code(200).send(vehicles);
  } catch (error) {
    console.error(error);
    reply.code(500).send(error);
  }
};

const updateVehiclesHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const body: any = request.body;
  const params: any = request.params;
  params.id = parseInt(params.id);

  try {
    const updatedVehicle = await updateVehicle(body, params);
    return reply.code(200).send(updateVehicle);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
};

const createVehicleHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const body: any = request.body;

  try {
    const vehicle = await createVehicle(body);
    return reply.code(201).send(vehicle);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export {
  getVehiclesHandler, 
  updateVehiclesHandler,
  createVehicleHandler
};