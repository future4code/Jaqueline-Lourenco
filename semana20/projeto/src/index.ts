import app from './controller/App'
import { postRouter } from './routes/PostRouter'
import { userRouter } from './routes/UserRouter'

app.use("/user", userRouter)
app.use("/post", postRouter)
