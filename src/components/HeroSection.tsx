"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import React from "react";

type HeroSectionProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  background?: string;
  minHeight?: string;
};

export default function HeroSection({ title, description, children, background, minHeight }: HeroSectionProps) {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: minHeight || "20vh" }} suppressHydrationWarning>
      <Column maxWidth="m" horizontal="center" gap="l" align="center">
        <Heading variant="display-strong-l" marginTop="128" style={{ fontSize: 'clamp(40px, 8vw, 64px)' }}>{title}</Heading>
        {description && (
          <Text variant="body-default-xl" style={{ color: '#E0E0E0' }} wrap="balance" marginBottom="32">{description}</Text>
        )}
        {children && (
          <>{children}</>
        )}
      </Column>
    </Column>
  );
}