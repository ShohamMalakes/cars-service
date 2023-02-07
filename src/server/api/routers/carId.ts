import { z } from "zod";
import { Res, Response } from "../../../types/Car";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

// export const carTechnicalInfoRouter = createTRPCRouter({
//   get: publicProcedure
//     .input(z.object({ _id: z.number() }))
//     .mutation(async ({ input }) => {
//       const res = await fetch(
//         `https://data.gov.il/api/3/action/datastore_search?resource_id=142afde2-6228-49f9-8a29-9b6c3a0cbe40&q=${input._id}`
//       );

//       const data: Response = await res.json();

//       console.log(data.result.records[0]);

//       return {
//         data: data.result.records[0],
//       };
//     }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
// });
