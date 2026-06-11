import { createServicePageHandlers } from "@/lib/i18n/service-pages/create-route";

const { generateMetadata, Page } = createServicePageHandlers("chirurgie-orala");

export { generateMetadata };
export default Page;
