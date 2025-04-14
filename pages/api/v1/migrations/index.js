import migrationRunner from 'node-pg-migrate'; 
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrationOptions = {
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (request.method === 'GET') {
      const pendingMigrations = await migrationRunner(defaultMigrationOptions);
      return response.status(200).json(pendingMigrations);
    }
    if (request.method === 'POST') {
      const migratedmigrations = await migrationRunner({
        ...defaultMigrationOptions,
        dryRun: false,
      
      });
      if (migratedmigrations.length > 0) {
        return response.status(201).json(migratedmigrations);
      }
      return response.status(200).json(migratedmigrations);
    }
    return response.status(405).end();
  }
 
