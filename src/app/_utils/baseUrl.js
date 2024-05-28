const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
const baseUrl =
  environment === "local"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;

export default baseUrl;
