import { Router } from 'express';
import {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '../controllers/teamController';

const router = Router();

// GET /api/team - Get all team members with optional filters
router.get('/', getAllTeamMembers);

// GET /api/team/:id - Get team member by ID
router.get('/:id', getTeamMemberById);

// POST /api/team - Create new team member
router.post('/', createTeamMember);

// PUT /api/team/:id - Update team member
router.put('/:id', updateTeamMember);

// DELETE /api/team/:id - Delete team member
router.delete('/:id', deleteTeamMember);

export default router;
