import { RequestHandler } from "express";

export const renderMember: RequestHandler = async (req, res) => {
    res.render("member", {
        member: {
            telNumber: "+49 420 6969",
            uniqueId: "sdhjklöfdswqasd",
            payload: "https://dropbox.com",
            name: "Pergamentkonsument"
        },
        BASE_URL: process.env.BASE_URL,
        error: false
    });
};