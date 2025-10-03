/*
  Warnings:

  - You are about to drop the column `imagen` on the `Product` table. All the data in the column will be lost.
  - Added the required column `imagenURL` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagenURL" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" TEXT NOT NULL
);
INSERT INTO "new_Product" ("descripcion", "id", "precio", "titulo") SELECT "descripcion", "id", "precio", "titulo" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
