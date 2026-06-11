import { createServicePageHandlers } from "@/lib/i18n/service-pages/create-route";

const { generateMetadata, Page } = createServicePageHandlers("estetica-dentara");

export { generateMetadata };
export default Page;
