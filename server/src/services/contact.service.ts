import path from "path";
import fs from "fs/promises";
import { TContact } from "../types/contact.types"
import { sendContactEmail } from "./email.service"
import { UPLOADS_PATH } from "../config/env";

export const contactEmailService = async (data: TContact) => {
  await sendContactEmail(data)
}

export const verifyCVService = async () => {
  const filePath = path.join(
    UPLOADS_PATH,
    "CV_FranciscoInda.pdf"
  );

  console.log(filePath)

  await fs.access(filePath);

  return filePath;
}
