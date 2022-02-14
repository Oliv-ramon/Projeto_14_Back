import db from "../db.js";

export default async function tokenValidation(req, res, next) {
  const authorization = req.headers.authorization;
  console.log(authorization)
  const token = authorization.replace("Bearer ", "");
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  try {
    const session = await db.collection("sessions").findOne({ token });

    if (!session) {
      return res.sendStatus(401);
    }

    res.locals.userId = session.userId;
  } catch {
    res.sendStatus(500);
  }

  next();
}