import express from "express"
import useRouter from "./routes/users.routes"

const app = express()
app.use(express.json())

app.use("/", useRouter)
app.listen(3000)