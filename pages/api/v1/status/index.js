import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();
  res.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
