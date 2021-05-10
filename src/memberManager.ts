import * as members from "./data/members.json";
import { Member } from "./models/memberModel";

export async function generateUniqueIds() {
    members.forEach(telNumber => {
        // TODO: add member to database and generate unique id if it doesnt already exist
    })
}

export async function exportMembers() {
    // TODO: export every member object that is currently stored in the database
}