"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import React from "react";

type WhoWeAreSectionProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function WhoWeAreSection({
  title,
  description,
  children
}: WhoWeAreSectionProps) {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" horizontal="center" gap="xl" align="center">
        {/* Text Content */}
        <Column fillWidth gap="l" horizontal="center">
          <Heading variant="display-strong-l" marginTop="48">{title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
          {children}
        </Column>
      </Column>
    </Column>
  );
}