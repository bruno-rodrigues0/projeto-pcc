import { Router } from 'express';
import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController';

const router = Router();

// GET /api/news - Get all news with optional filters
router.get('/', getAllNews);

// GET /api/news/:id - Get news by ID
router.get('/:id', getNewsById);

// POST /api/news - Create new news
router.post('/', createNews);

// PUT /api/news/:id - Update news
router.put('/:id', updateNews);

// DELETE /api/news/:id - Delete news
router.delete('/:id', deleteNews);

export default router;
