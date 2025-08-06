import { Request, Response } from 'express';
import prisma from '../database';

export const getAllNews = async (req: Request, res: Response) => {
  try {
    const { published, featured, limit, offset } = req.query;
    
    const where: any = {};
    if (published !== undefined) where.published = published === 'true';
    if (featured !== undefined) where.featured = featured === 'true';

    const news = await prisma.news.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit ? parseInt(limit as string) : undefined,
      skip: offset ? parseInt(offset as string) : undefined,
    });

    const total = await prisma.news.count({ where });

    res.json({
      data: news,
      total,
      limit: limit ? parseInt(limit as string) : null,
      offset: offset ? parseInt(offset as string) : 0,
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const news = await prisma.news.findUnique({
      where: { id },
    });

    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }

    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

export const createNews = async (req: Request, res: Response) => {
  try {
    const { title, content, excerpt, image, altImage, published, featured } = req.body;

    const news = await prisma.news.create({
      data: {
        title,
        content,
        excerpt,
        image,
        altImage,
        published: published ?? false,
        featured: featured ?? false,
      },
    });

    res.status(201).json(news);
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).json({ error: 'Failed to create news' });
  }
};

export const updateNews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, excerpt, image, altImage, published, featured } = req.body;

    const news = await prisma.news.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        image,
        altImage,
        published,
        featured,
      },
    });

    res.json(news);
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({ error: 'Failed to update news' });
  }
};

export const deleteNews = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.news.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({ error: 'Failed to delete news' });
  }
};
