import express, { Router } from "express";
import { addQuote, getQuote, renderAdd, renderAll, renderOverview } from "./endpoints";

export const dbRoutes = Router();
export const viewRoutes = Router();

dbRoutes.post("/addQuote", addQuote);

viewRoutes.get("/add", renderAdd);
viewRoutes.get("/all", renderAll);
viewRoutes.get("/quote/:id", getQuote);
viewRoutes.get("/", renderOverview);