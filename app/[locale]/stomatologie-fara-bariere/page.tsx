import { createServicePageHandlers } from "@/lib/i18n/service-pages/create-route";

const { generateMetadata, Page } = createServicePageHandlers("stomatologie-fara-bariere");

export { generateMetadata };
export default Page;
