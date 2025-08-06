import { Request, Response } from 'express';
import prisma from '../database';

export const getAllTeamMembers = async (req: Request, res: Response) => {
  try {
    const { role, active } = req.query;
    
    const where: Record<string, any> = {};
    if (role) where.role = role as string;
    if (active !== undefined) where.active = active === 'true';

    const members = await prisma.teamMember.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    res.json({ data: members });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
};

export const getTeamMemberById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const member = await prisma.teamMember.findUnique({
      where: { id },
    });

    if (!member) {
      return res.status(404).json({ error: 'Team member not found' });
    }

    res.json(member);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team member' });
  }
};

export const createTeamMember = async (req: Request, res: Response) => {
  try {
    const { name, description, picture, role, active, links } = req.body;

    const member = await prisma.teamMember.create({
      data: {
        name,
        description,
        picture,
        role,
        active: active ?? true,
        links,
      },
    });

    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create team member' });
  }
};

export const updateTeamMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, picture, role, active, links } = req.body;

    const member = await prisma.teamMember.update({
      where: { id },
      data: {
        name,
        description,
        picture,
        role,
        active,
        links,
      },
    });

    res.json(member);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update team member' });
  }
};

export const deleteTeamMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.teamMember.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team member' });
  }
};
