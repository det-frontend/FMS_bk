import {
  addDetailSaleHandler,
  deleteDetailSaleHandler,
  detailSaleUpdateErrorHandler,
  getDetailSaleByDateHandler,
  getDetailSaleDatePagiHandler,
  getDetailSaleHandler,
  initialDetailHandler,
  preSetDetailSaleHandler,
  updateDetailSaleByApHandler,
  updateDetailSaleHandler,
} from "../controller/detailSale.controller";
import { managerValidator } from "../middleware/managerValidator";

import { hasAnyPermit } from "../middleware/permitValidator";
import { roleValidator } from "../middleware/roleValidator";
import {
  validateAll,
  validateToken,
  validateToken2,
} from "../middleware/validator";
import {
  allSchemaId,
  apSchema,
  detailSaleErrorUpdateSchema,
  detailSaleSchema,
  detailSaleUpdateSchema,
} from "../schema/schema";

const detailSaleRoute = require("express").Router();

detailSaleRoute.get(
  "/pagi/:page",
  validateToken2,
  hasAnyPermit(["view"]),
  getDetailSaleHandler
);

detailSaleRoute.get(
  "/by-date",
  validateToken2,
  hasAnyPermit(["view"]),
  getDetailSaleByDateHandler
);

detailSaleRoute.get(
  "/pagi/by-date/:page",
  validateToken2,
  hasAnyPermit(["view"]),
  getDetailSaleDatePagiHandler
);

//that for only device
detailSaleRoute.post(
  "/",
  validateToken,
  validateAll(detailSaleSchema),
  addDetailSaleHandler
);

detailSaleRoute.post(
  "/preset",
  validateToken,
  validateAll(detailSaleSchema),
  preSetDetailSaleHandler
);

detailSaleRoute.patch(
  "/",
  validateToken,
  validateAll(allSchemaId),
  updateDetailSaleHandler
);

detailSaleRoute.patch(
  "/error",
  validateToken,
  managerValidator,
  detailSaleUpdateErrorHandler
);

detailSaleRoute.delete(
  "/",
  validateToken2,
  roleValidator(["admin", "installer"]),
  // hasAnyPermit(["delete"]),
  validateAll(allSchemaId),
  deleteDetailSaleHandler
);

detailSaleRoute.post(
  "/initial",
  validateToken2,
  roleValidator(["admin", "installer"]),
  hasAnyPermit(["add"]),
  initialDetailHandler
);

detailSaleRoute.post(
  "/ap-update",
  validateToken,
  validateAll(apSchema),
  updateDetailSaleByApHandler
);

export default detailSaleRoute;
