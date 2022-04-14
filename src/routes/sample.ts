import { router } from "../utils/routeWrapper";
import { SampleController } from "../controllers/sample";

router.post("/sampleRoute", SampleController.sampleFunction);

module.exports = router;
