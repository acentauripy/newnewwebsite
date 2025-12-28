"use client";

import React from "react";
import { Row, Card, Avatar, Text, Media, Column, Line, Icon } from "@once-ui-system/core";

export default function NoHoverExampleCard() {
  const sharedStyle: React.CSSProperties = {
    backgroundColor: "var(--surface)",
    // ensure the library's hover token resolves to the same surface color
    ["--neutral-alpha-weak" as any]: "var(--surface)",
    boxShadow: "none",
    transform: "none",
    transition: "none",
  };

  return (
    <Row maxWidth={24}>
      <Card
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
        className="no-hover-card"
        style={sharedStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--surface)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--surface)")}
      >
        <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
          <Avatar size="xs" src="/images/avatar.jpg" />
          <Text variant="label-default-s">Lorant One</Text>
        </Row>

        <Media
          border="neutral-alpha-weak"
          sizes="400px"
          fillWidth
          aspectRatio="4 / 3"
          radius="l"
          alt="Proxima b"
          src="/images/card.jpg"
        />

        <Column fillWidth paddingX="20" paddingY="24" gap="8">
          <Text variant="body-default-xl">Proxima b</Text>
          <Text onBackground="neutral-weak" variant="body-default-s">
            A planet so cruel on the surface, but once you explore what's underneath, you'll question
            everything you know. Yet, you vibe with it.
          </Text>
        </Column>

        <Line background="neutral-alpha-medium" />

        <Row paddingX="20" paddingY="12" gap="8" vertical="center" textVariant="label-default-s" onBackground="neutral-medium">
          <Icon name="like" size="s" onBackground="neutral-strong" />
          34
          <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" />
          5
        </Row>
      </Card>
    </Row>
  );
}
