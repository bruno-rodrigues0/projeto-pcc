import { Request, Response } from 'express';
import prisma from '../database';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { available, featured, category, limit, offset } = req.query;
    
    const where: Record<string, any> = {};
    if (available !== undefined) where.available = available === 'true';
    if (featured !== undefined) where.featured = featured === 'true';
    if (category) where.category = category as string;

    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit ? parseInt(limit as string) : undefined,
      skip: offset ? parseInt(offset as string) : undefined,
    });

    const total = await prisma.product.count({ where });

    res.json({
      data: products,
      total,
      limit: limit ? parseInt(limit as string) : null,
      offset: offset ? parseInt(offset as string) : 0,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { title, description, price, image, altImage, category, available, featured } = req.body;

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        image,
        altImage,
        category,
        available: available ?? true,
        featured: featured ?? false,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, price, image, altImage, category, available, featured } = req.body;

    const product = await prisma.product.update({
      where: { id },
      data: {
        title,
        description,
        price: price ? parseFloat(price) : undefined,
        image,
        altImage,
        category,
        available,
        featured,
      },
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
