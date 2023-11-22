import { Schema, model, models } from "mongoose";


const AppointmentSchema = new Schema({
    dob: Date,
    appointmentTime: String   


})

const Appointment = models.Appointment || model("Appointment", AppointmentSchema)


export default Appointment