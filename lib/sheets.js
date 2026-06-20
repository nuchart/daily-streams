import axios from "axios";

const SHEET_ID =
  "1tHpMM-fu8Qspp_e6JNmXClWPxEtzu2p8V0TBuWf9WCY";

const API_KEY =
  process.env.GOOGLE_SHEETS_API_KEY;

export async function getDashboardData() {
  const range = "WEBSITE!A1:M30";

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const response = await axios.get(url);

  return response.data.values;
}