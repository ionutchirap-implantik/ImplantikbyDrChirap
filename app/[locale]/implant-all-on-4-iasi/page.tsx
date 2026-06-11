import { createServicePageHandlers } from "@/lib/i18n/service-pages/create-route";

const { generateMetadata, Page } = createServicePageHandlers("implant-all-on-4-iasi");

export { generateMetadata };
export default Page;
