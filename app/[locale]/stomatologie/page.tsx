import { createServicePageHandlers } from "@/lib/i18n/service-pages/create-route";

const { generateMetadata, Page } = createServicePageHandlers("stomatologie");

export { generateMetadata };
export default Page;
