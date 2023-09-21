import fastify from "fastify";
import vehicleRoutes from "./modules/vehicle/vehicle.route";

const server = fastify({ logger: false });

server.get('/health', async (request, reply) => {
  reply.send({
    status: 'OK', 
    statusCode: 200
  });
});

const startServer = () => {
  server.register(vehicleRoutes);
  try {
    server.listen({ port: 8080 }, (err, address) => {
      console.log(`Server started at ${address}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();