const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const port = process.env.PORT || 8888
const cors = require("cors")
const nodeSchedual = require("node-schedule")
// const upload = require("./middlewares/uploadImageMW")
// const upload = require("./middlewares/uploadFileMW")

const user = require("./routes/User")
const token = require("./routes/Token")
const logo = require("./routes/Logo")
const login = require("./routes/Login")
const logout = require("./routes/Logout")
const admin = require("./routes/Admin")
const password = require("./routes/Password")
const post = require("./routes/Post")
const comment = require("./routes/Comment")
const feature = require("./routes/Feature")
const tag = require("./routes/Tag")
const aiModel = require("./routes/AIModel")
// const nodeMail = require("./util/nodeMail")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(helmet())
app.use(express.static("./public"))
app.use(cors())

app.use("/api/user", user)
app.use("/api/token", token)
app.use("/api/logo", logo)
app.use("/api/login", login)
app.use("/api/logout", logout)
app.use("/api/admin", admin)
app.use("/api/password", password)
app.use("/api/post", post)
app.use("/api/comment", comment)
app.use("/api/feature", feature)
app.use("/api/tag", tag)
app.use("/api/predict", aiModel)

// app.post("/", upload.array("file"), (req, res)=>{
//     req.files.forEach(e=>{
//         console.log(e.filename)
//     })
//     return res.json(req.files)
// })

// const confirmAccount = nodeSchedual.scheduleJob("0 41 * * * *", ()=>{
//     console.log(new Date())
//     nodeMail("mohamedtwfik910@gmail.com", "test", "test mail", "https://google.com")
// })

app.use((req, res)=>{res.status(400).json({message:"Not Found This endpoint :("})})

app.listen(port, () => console.log(`Server listening on port ${port}!`));