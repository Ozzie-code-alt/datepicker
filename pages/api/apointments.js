import { connectMongo } from "../../utils/connectDB";
import Appointment from "../../models/Appointment";
import moment from "moment"


export default async function handler (req, res) {
console.log("Connection to Mongo")
await connectMongo();
console.log("Connected to Mongo")

if (req.method === "POST"){
    const appointment = new Appointment(req.body)
    await appointment.save();
    res.status(201).end();
}else{
    res.status(405).end();
}

} 