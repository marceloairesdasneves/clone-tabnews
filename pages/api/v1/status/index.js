import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toLocaleString();

  const databaseVersionResult = await database.query("SHOW server_version();");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue
      },
    },
  });
}


export default status;
