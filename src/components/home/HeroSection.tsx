"use client";

import {
  Badge,
  Heading,
  Text,
  Logo,
  Line,
  Column,
  RevealFx,
  Row,
  Button,
  Icon,
  Arrow,
  TypeFx
} from "@once-ui-system/core";

export default function HeroSection() {
  return (
    <Column fillWidth center padding="l" className="hero-container" style={{ minHeight: "100vh", position: "relative" }}>
      <Column maxWidth="m" horizontal="center" gap="l" align="center">
        {/* Badge comentado - Últimas tecnologías (2025) */}
        {/*
        <RevealFx fillWidth horizontal="center">
          <Row id="hero-badge-row-top" vertical="center">
            <Badge
              href="/"
              textVariant="code-default-s"
              border="neutral-alpha-medium"
              onBackground="neutral-medium"
              vertical="center"
              arrow={false}
            >
              <Text marginX="4">Últimas tecnologías (2025)</Text>
            </Badge>
          </Row>
        </RevealFx>
        */}

        <RevealFx fillWidth horizontal="center">
          <Row gap="16" vertical="center" horizontal="center" className="hero-title-row">
            <Text variant="display-strong-xl">
              Creamos
            </Text>
            <TypeFx
              variant="display-strong-xl"
              words={[
                "tecnología",
                "innovación",
                "soluciones",
                "experiencias"
              ]}
              speed={100}
              hold={2500}
              trigger="instant"
            />
          </Row>
        </RevealFx>
        <RevealFx delay={0.2} fillWidth horizontal="center">
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
            marginBottom="16"
          >
            Creamos y acompañamos iniciativas tecnológicas.
          </Text>
        </RevealFx>
        <RevealFx delay={0.4} fillWidth horizontal="center">
          <Row vertical="center" gap="16">
            <Button id="arrow-trigger-casos" className="thick-border" href="/casos-de-exito" size="m" variant="secondary">
              Casos de éxito
            </Button>
            <Button id="arrow-trigger-contacto" href="/contacto" size="m" variant="primary">
              Contáctanos
              <Arrow trigger="#arrow-trigger-contacto" scale={0.9} color="onSolid" style={{ alignSelf: 'center' }} />
            </Button>
          </Row>
        </RevealFx>
        <style dangerouslySetInnerHTML={{ __html: `
          .bounce-icon {
            animation: bounce 2s infinite;
          }
          /* Thicker border for the transparent (secondary) button */
          .thick-border {
            border-width: 2px !important;
            border-style: solid !important;
          }
          /* Hero title responsive layout */
          .hero-title-row {
            flex-direction: row;
          }
          @media (max-width: 767px) {
            .hero-title-row {
              flex-direction: column;
            }
          }
          /* Hero arrow positioning */
          .hero-arrow {
            bottom: 2rem;
          }
          @media (max-width: 767px) {
            .hero-arrow {
              bottom: 5rem;
            }
          }
          /* Hero container positioning */
          @media (max-width: 767px) {
            .hero-container {
              transform: translateY(-3rem);
            }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(10px);
            }
            60% {
              transform: translateY(5px);
            }
          }
        ` }} />
      </Column>
      <RevealFx delay={0.6} fillWidth horizontal="center" className="hero-arrow" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        <Icon name="chevronDown" size="xl" className="bounce-icon" style={{ color: 'white' }} />
      </RevealFx>
    </Column>
  );
}
