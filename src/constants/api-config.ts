const apiUrl: string = process.env.REACT_APP_ENV === 'prod' ? "https://transaction-app-beta.vercel.app/" : "http://localhost:3000";

export { apiUrl };
