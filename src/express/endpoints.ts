import { RequestHandler } from "express";
import { Quote } from "../models/quoteModel";
import nodeFetch from "node-fetch";
import * as classes from "../data/classes.json";

export const addQuote: RequestHandler = async (req, res) => {
    console.log(req.body.recaptchaToken);
    const secret_key = process.env.RECAPTCHA_KEY;
    const token = req.body.recaptchaToken;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    let response = await nodeFetch(url, {
        method: 'post'
    });
    let data = [];
    try {
        data = await response.json();
    } catch (error) {
        return;
    }

    console.log(data);

    if (data["success"] && data["success"] > 0.5) {
        let result = await Quote.create({
            class: req.body.class || "",
            date: Date.now(),
            text: req.body.text || "",
            submittedBy: req.body.submittedBy || ""
        });
        res.redirect(result ? "/add" : "/add?err=true");
    } else {
        res.redirect("/add?err=true");
    }
};

export const renderAdd: RequestHandler = async (req, res) => {
    res.render("add", {
        classes: classes,
        error: req.query.err ? true : false
    });
};

export const renderAll: RequestHandler = async (req, res) => {
    let quotes = await Quote.find({});
    res.render("all", {
        quotes: quotes
    });
};

export const renderOverview: RequestHandler = async (req, res) => {
    res.render("overview");
};