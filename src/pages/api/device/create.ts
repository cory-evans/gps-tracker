// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { prisma } from '../../../server/db/client';
import { authOptions as nextAuthOptions } from '../auth/[...nextauth]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, nextAuthOptions);

  if (!session) {
    res.send({
      error: 'Not Authorized',
    });
    return;
  }

  const {
    query: { name },
  } = req;

  if (typeof name !== 'string') {
    res.send({
      error: `invalid type ${typeof name}`,
    });
    return;
  }

  if (name == '') {
    res.send({
      error: 'name is empty',
    });
    return;
  }

  const d = await prisma.device.create({
    data: {
      name: name,
      ownerID: session.uid as string,
    },
  });

  res.send(d);
};
