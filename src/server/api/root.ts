import { carTechnicalInfoRouter } from "./routers/car";
import { createTRPCRouter } from "./trpc";
import { carRouter } from "./routers/car";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  car: carRouter,
  carTechnicalInfo: carTechnicalInfoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
