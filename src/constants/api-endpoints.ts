export const API_ENDPOINTS: { [key: string]: string } = {
  TRANSACTIONS: process.env.REACT_APP_ENV === 'prod' ? "https://transaction-app-beta.vercel.app/api/db.json" : "http://localhost:3000/api/db.json",
};
