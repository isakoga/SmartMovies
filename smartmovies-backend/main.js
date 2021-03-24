import app from "./app";
import cors from "cors";
import router from "./router";
import "./controller";

app.use(cors({
    origin: "*"
}));

app.use(router);

app.listen(3000, () => {
    console.log("Smart Movies listening on port 3000!");
});