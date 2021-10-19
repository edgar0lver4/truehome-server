import AirportsRouter from "./routes/airports";
import AuthRoutes from "./routes/auth";
import CitiesRouter from "./routes/cities";
import conversorRouter from "./routes/conversor";
import FlightRouter from "./routes/fight";
import Server from "./server/server";

let server = new Server();

server.addApiDir('/airports',AirportsRouter);
server.addApiDir('/convert',conversorRouter);
server.addApiDir('/cities',CitiesRouter);
server.addApiDir('/auth',AuthRoutes);
server.addApiDir('/flight',FlightRouter);
server.start();