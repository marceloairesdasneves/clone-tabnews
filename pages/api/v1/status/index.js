import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  response.status(200).json({
    update_at: updateAt,
  });
}
export default status;
