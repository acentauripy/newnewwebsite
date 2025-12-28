"use client";

import dynamic from "next/dynamic";
import { Column, Card } from "@once-ui-system/core";

// Load ContactSection client-only to avoid SSR hydration mismatch
const ContactSection = dynamic(() => import("../home/ContactSection"), { ssr: false });

export default function ContactFormCard() {
  return (
    <Card
      className="contact-card contact-form-card"
      fillHeight
      padding="m"
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      style={{
        flex: '1 1 0',
        maxWidth: 720,
        minWidth: 320,
        width: '100%',
        marginRight: 0,
        boxSizing: 'border-box',
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}
      suppressHydrationWarning
    >
      <Column fillHeight style={{ flex: 1, minHeight: 0 }}>
        <ContactSection />
      </Column>
    </Card>
  );
}