// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const d = await prisma.device.findFirst();

  if (!d) {
    res.status(400).send({
      error: `Device not found`,
    });
    return;
  }

  const pos = await prisma.position.create({
    data: {
      deviceID: d.id,
      lat: -39.165465,
      lon: 171.165456,
    },
  });

  res.status(200).send(pos);
};
