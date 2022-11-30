import Users from "../model/user";


export default async function getUsers(req, res) {
  try {
    const users = await Users.find({})
    res.status(200).json({user: "Get Request from controller"})
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
