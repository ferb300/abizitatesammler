import { RequestHandler } from "express";

export const renderOverview: RequestHandler = async (req, res) => {
    res.render("overview");
};