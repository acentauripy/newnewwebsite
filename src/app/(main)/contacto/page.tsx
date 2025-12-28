"use client";

import { Column } from "@once-ui-system/core";
import HeroSection from "../../../components/HeroSection";
import ContactFAQ from "../../../components/contacto/ContactFAQ";
import ContactFormMapSection from "../../../components/contacto/ContactFormMapSection";

export default function ContactoPage() {
  return (
    <Column fillWidth center suppressHydrationWarning>
      <HeroSection
        title="Contacto"
        description="¿Querés hablar con nosotros? Acá están todos los canales por los cuales podés hablar con nosotros."
      />

      {/* Contact Form + Map Section */}
      <Column fillWidth center padding="l" style={{ marginTop: 48, marginBottom: 48 }} suppressHydrationWarning>
        <ContactFormMapSection />
      </Column>

      {/* FAQ Section */}
      <Column fillWidth center padding="l" style={{ marginBottom: 48 }} suppressHydrationWarning>
        <ContactFAQ />
      </Column>
    </Column>
  );
}
