import { Vehicle } from "@prisma/client";
import prisma from "../../utils/db/prisma"

const getVehicles = async () => {
  return await prisma.vehicle.findMany();
};

const updateVehicle = async (data: any, where: any) => {
  const vehicle = await prisma.vehicle.update({
    data,
    where
  });

  return vehicle;
};

const createVehicle = async (data: any) => {
  return prisma.vehicle.create({ data });
};

export {
  getVehicles,
  updateVehicle,
  createVehicle
}