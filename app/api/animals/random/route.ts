import { type NextRequest, NextResponse } from "next/server";
import { type Animal, animals } from "@/configs/data/animals";

/**
 * @swagger
 * /api/animals/random:
 *   get:
 *     summary: Get random animal information
 *     description: Retrieve information about a random animal from our collection
 *     tags:
 *       - Animals
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [mammal, bird, reptile, fish, amphibian]
 *         description: Filter by animal type (optional)
 *     responses:
 *       200:
 *         description: Successfully retrieved random animal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: null
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: number
 *                       example: 200
 *                     payload:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "lion"
 *                         name:
 *                           type: string
 *                           example: "Lion"
 *                         type:
 *                           type: string
 *                           example: "mammal"
 *                         image:
 *                           type: string
 *                           example: "https://source.unsplash.com/featured/?lion"
 *                         description:
 *                           type: string
 *                           example: "The king of the jungle, known for its majestic mane"
 *       400:
 *         description: Bad request - Invalid animal type
 */
export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type") as Animal["type"] | null;

    let filteredAnimals = animals;
    if (type) {
      filteredAnimals = animals.filter((animal) => animal.type === type);
      if (filteredAnimals.length === 0) {
        return NextResponse.json(
          {
            error: { message: `No animals found of type: ${type}` },
            data: null
          },
          { status: 400 }
        );
      }
    }

    const randomIndex = Math.floor(Math.random() * filteredAnimals.length);
    const animal = filteredAnimals[randomIndex];

    return NextResponse.json({
      error: null,
      data: {
        status: 200,
        payload: animal
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: { message: errorMessage }, data: null }, { status: 500 });
  }
}
