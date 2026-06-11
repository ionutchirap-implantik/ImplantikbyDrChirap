import { createServicePageHandlers } from "@/lib/i18n/service-pages/create-route";

const { generateMetadata, Page } = createServicePageHandlers("protetica-dentara");

export { generateMetadata };
export default Page;
