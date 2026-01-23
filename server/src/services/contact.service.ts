import path from "path";
import fs from "fs/promises";
import { TContact } from "../types/contact.types"
import { sendContactEmail } from "./email.service"

export const contactEmailService = async (data: TContact) => {
  await sendContactEmail(data)
}

export const verifyCVService = async () => {
  const filePath = path.join(
    __dirname,
    "..",
    "uploads",
    "CV_FranciscoInda.pdf"
  );

  console.log(filePath)

  await fs.access(filePath);

  return filePath;
}
