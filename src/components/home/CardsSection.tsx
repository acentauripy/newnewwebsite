"use client";

import { Card, Column, Row, Text } from "@once-ui-system/core";

export default function CardsSection() {
  return (
    <>
      <Row 
        gap="24" 
        fillWidth 
        horizontal="center"
        className="cards-row"
        style={{ 
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
      <Card padding="24" radius="l" border="neutral-alpha-medium" background="surface">
        <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) translateY(-2rem)', fontSize: '8rem', fontWeight: 'bold', color: 'rgba(252, 251, 248, 0.05)', pointerEvents: 'none'}}>01</div>
        <Column gap="16" align="center" style={{position: 'relative', zIndex: 10}}>
          <Text variant="heading-strong-m" onBackground="neutral-strong">Tecnología</Text>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">Ingeniería, inteligencia artificial, machine learning, diseño y desarrollo de software escalable</Text>
        </Column>
      </Card>
      <Card padding="24" radius="l" border="neutral-alpha-medium" background="surface">
        <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) translateY(-2rem)', fontSize: '8rem', fontWeight: 'bold', color: 'rgba(252, 251, 248, 0.05)', pointerEvents: 'none'}}>02</div>
        <Column gap="16" align="center" style={{position: 'relative', zIndex: 10}}>
          <Text variant="heading-strong-m" onBackground="neutral-strong">Innovación</Text>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">Analistas y estrategas enfocados en identificar oportunidades tecnológicas disruptivas</Text>
        </Column>
      </Card>
      <Card padding="24" radius="l" border="neutral-alpha-medium" background="surface">
        <div style={{position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) translateY(-2rem)', fontSize: '8rem', fontWeight: 'bold', color: 'rgba(252, 251, 248, 0.05)', pointerEvents: 'none'}}>03</div>
        <Column gap="16" align="center" style={{position: 'relative', zIndex: 10}}>
          <Text variant="heading-strong-m" onBackground="neutral-strong">Impacto</Text>
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">Especialistas en transformar investigación en productos que generen valor real para la sociedad</Text>
        </Column>
      </Card>
    </Row>
    <style dangerouslySetInnerHTML={{
      __html: `
        @media (min-width: 768px) {
          .cards-row {
            flex-direction: row !important;
          }
        }
        @media (max-width: 767px) {
          .cards-row {
            gap: 16px !important;
          }
        }
      `
    }} />
  </>
  );
}