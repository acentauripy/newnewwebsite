"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import React from "react";

type SectionProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  background?: string;
  minHeight?: string;
};

export default function Section({ title, description, children, background, minHeight }: SectionProps) {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: minHeight || "50vh", backgroundColor: background || undefined }}>
      <Column maxWidth="m" horizontal="center" gap="l" align="center">
        <Heading variant="display-strong-l" marginTop="48">{title}</Heading>
        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" marginBottom="32">{description}</Text>
        )}
        {children}
      </Column>
    </Column>
  );
}
