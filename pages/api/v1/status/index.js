import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sun");
  console.log(result.rows);
  res.status(200).json({chave: "sao acima da media"});
}
export default status;
