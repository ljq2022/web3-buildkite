import { router } from "../utils/routeWrapper"

router.use("/sample", require("./sample"));
module.exports = router;
