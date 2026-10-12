import { ClinicalArchitectureSection } from './ClinicalArchitectureSection/ClinicalArchitectureSection';
import { DeviceCatalogueSection } from './DeviceCatalogueSection/DeviceCatalogueSection';
import { EnquiryPortalSection } from './EnquiryPortalSection/EnquiryPortalSection';
import { EnterprisePartnershipSection } from './EnterprisePartnershipSection/EnterprisePartnershipSection';
import { HomeHero } from './HomeHero/HomeHero';

export function HomePage() {
  return (
    <>
      <title>MDX360 | Advanced Medical Aesthetics &amp; Clinical Energy Systems</title>

      <HomeHero />

      {/* Innovation pillars */}
      <ClinicalArchitectureSection />

      {/* Device catalogue */}
      <DeviceCatalogueSection />

      {/* Enterprise partnership */}
      <EnterprisePartnershipSection />

      {/* Enquiry portal */}
      <EnquiryPortalSection />
    </>
  );
}
