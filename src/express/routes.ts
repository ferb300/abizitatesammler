import express, { Router } from "express";
import { renderOverview } from "./mainEndpoints";
import { renderMember } from "./memberEndpoints";
import { addQuote, getQuote, renderAdd, renderAll } from "./quoteEndpoints";


export const dbRoutes = Router();
export const viewRoutes = Router();

dbRoutes.post("/addQuote", addQuote);

viewRoutes.get("/add", renderAdd);
viewRoutes.get("/all", renderAll);
viewRoutes.get("/quote/:id", getQuote);
viewRoutes.get("/members/:id", renderMember);
viewRoutes.get("/", renderOverview);