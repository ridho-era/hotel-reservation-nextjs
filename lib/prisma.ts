import { PrismaClient } from "@prisma/client";

// Mencegah TypeScript error saat akses global
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // Opsional: Aktifkan log query jika ingin melihat SQL di terminal
    log: ["query"],
  });

// Jika bukan production (sedang development), simpan koneksi di variabel global
// agar tidak dibuat ulang setiap kali hot-reload.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
