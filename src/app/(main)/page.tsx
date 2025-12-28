"use client";

import Footer from "@/components/Footer";
import HeroSection from "../../components/home/HeroSection";
import Section from "../../components/home/Section";
import WhoWeAreSection from "../../components/home/WhoWeAreSection";
import CardsSection from "../../components/home/CardsSection";
import { Column, Row, Text, Button, RevealFx, Flex, Heading, MatrixFx, Avatar, Icon, Grid } from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth>
      <HeroSection />
      <WhoWeAreSection
        title="¿Quiénes somos?"
        description="Somos un grupo dedicado a enfrentar los mayores desafíos mediante la innovación y la colaboración. Impulsados por la investigación y el desarrollo de vanguardia, creamos soluciones que generan un impacto positivo y tangible."
      />
      <Section title="¿Qué buscamos?" description="Ser líderes en la creación de tecnología ética y sostenible que transforme industrias y resuelva problemas globales." minHeight="100vh"/>
      <Section title="Competimos para innovar e innovamos para competir" description="Participamos en eventos y competencias internacionales para validar nuestras capacidades y mantenernos a la vanguardia tecnológica. Creamos soluciones y productos innovadores que generan impacto real en el mundo de hoy." minHeight="100vh"/>
      <Section title="Dando forma a la tecnología del mañana, hoy" description="Somos un equipo multidisciplinario de expertos en tecnología, ciencia e innovación, comprometidos con crear soluciones que transformen industrias y mejoren vidas." minHeight="100vh">
        <CardsSection />
      </Section>

      {/* CTA Section */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="xl" horizontal="center" style={{ margin: "0 auto" }}>
        <RevealFx>
          <Flex
            fillWidth
            padding="48"
            radius="xl"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="24"
            horizontal="center"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <MatrixFx
              position="absolute"
              top="0"
              left="0"
              height={24}
              colors={["neutral-solid-strong"]}
              trigger="mount"
              flicker
              opacity={100}
              speed={0.5}
              style={{ zIndex: -1 }}
              bulge={{
                type: "wave",
                duration: 7,
                intensity: 20,
                repeat: true
              }}
            />
            <Heading variant="display-strong-s" align="center">
              ¿Listo para construir algo increíble?
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '500px' }}>
              Estamos aquí para transformar tus ideas en realidad. Contanos sobre tu proyecto y hagamos algo extraordinario juntos.
            </Text>
            <Button href="/contacto" size="l" arrowIcon>
              Hablemos de tu proyecto
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
