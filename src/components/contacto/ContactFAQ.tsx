"use client";

import { useState, useEffect } from "react";
import { Row, Column, Heading, Text, AccordionGroup, SmartLink, Skeleton } from "@once-ui-system/core";

const faqs = [
  {
    title: "¿Qué servicios ofrecen?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Ofrecemos desarrollo de software, diseño de interfaces, consultoría tecnológica y soluciones digitales personalizadas para empresas de todos los tamaños.
      </Text>
    ),
  },
  {
    title: "¿Cómo me contacto?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Podés usar el formulario de contacto en esta página, escribirnos a hola@acentauri.co o llamarnos al +595 9XX XXX XXX.
      </Text>
    ),
  },
  {
    title: "¿Cuánto tiempo toma un proyecto?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que soluciones más complejas pueden requerir 2-6 meses. Te damos una estimación precisa después de la consulta inicial.
      </Text>
    ),
  },
  {
    title: "¿Ofrecen mantenimiento después del lanzamiento?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, corrección de bugs, optimizaciones de rendimiento y soporte técnico continuo.
      </Text>
    ),
  },
  {
    title: "¿Con quién trabajan?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Trabajamos con empresas, startups y personas independientes. Incluso si sos una sola persona con una idea o un proyecto incipiente, nos encanta colaborar: adaptamos alcance y presupuesto para encontrar la mejor forma de trabajar juntos.
      </Text>
    ),
  },
  {
    title: "¿Qué tecnologías utilizan?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Utilizamos tecnologías modernas como React, Next.js, Node.js, TypeScript, y bases de datos como PostgreSQL y MongoDB. Siempre elegimos las mejores herramientas para cada proyecto.
      </Text>
    ),
  },
  {
    title: "¿Ofrecen consultoría?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Sí, ofrecemos servicios de consultoría tecnológica, revisión de código, auditorías de seguridad y asesoramiento estratégico para optimizar tus procesos digitales.
      </Text>
    ),
  },
  {
    title: "¿Tienen experiencia en e-commerce?",
    content: (
      <Text variant="body-default-s" onBackground="neutral-weak">
        Sí, hemos desarrollado múltiples plataformas de e-commerce con integración de pagos, gestión de inventario, paneles de administración y experiencias de usuario optimizadas.
      </Text>
    ),
  },
];

export default function ContactFAQ() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Row
      fillWidth
      gap="xl"
      maxWidth="l"
      m={{ direction: "column" }}
    >
      {/* Left Column - Title and Description */}
      <Column flex={1} gap="16" style={{ minWidth: 0 }}>
        <Column gap="s" marginTop="8" marginBottom="32" fillWidth horizontal="start">
          <Heading as="h2" variant="display-strong-s" style={{ textAlign: 'left' }}>
            Preguntas frecuentes
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-medium" style={{ textWrap: "balance", textAlign: 'left' }}>
            Algunas de las preguntas más comunes que nos hacen. Si no encontrás la respuesta que buscás, escribinos.
          </Text>
        </Column>
      </Column>

      {/* Right Column - FAQ Accordion */}
      <Column flex={1} gap="16" style={{ minWidth: 0, marginTop: '-16px' }}>
        {mounted ? (
          <AccordionGroup items={faqs} />
        ) : (
          <Skeleton shape="block" fillWidth style={{ minHeight: '400px', borderRadius: 'var(--radius-m)' }} />
        )}
        
        <Text
          variant="body-default-s"
          onBackground="neutral-medium"
          marginTop="20"
          align="center"
          style={{ textWrap: "balance" }}
        >
          ¿Tenés más preguntas? Escribinos a{" "}
          <SmartLink href="mailto:hola@acentauri.co">
            hola@acentauri.co
          </SmartLink>
        </Text>
      </Column>
    </Row>
  );
}