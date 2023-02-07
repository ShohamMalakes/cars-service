import { z } from "zod";
import { Car, Res, Response } from "../../../types/Car";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const carRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ license_plate: z.string() }))
    .mutation(async ({ input }) => {
      const res = await fetch(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${input.license_plate}`
      );
      
      const data: Res = await res.json();
      const response = await fetch(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=142afde2-6228-49f9-8a29-9b6c3a0cbe40",
        body: JSON.parse({
          "_id": '73127'
        })
        );
      return {
        data: data.result.records[0],
        };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
export const carTechnicalInfoRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ _id: z.number() }))
    .mutation(async () => {
      const res = await fetch(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=142afde2-6228-49f9-8a29-9b6c3a0cbe40&q=7115056`
      );

      const data: Response = await res.json();

      console.log(data);
      return {
        data: data.result.records[0],
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
