"use client";

import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import {
  Column,
  Row,
  Flex,
  Text,
  Heading,
  Icon,
  Line,
  RevealFx,
  Button,
  Grid,
  Media,
  Avatar,
  AccordionGroup,
  LetterFx,
  AutoScroll,
  Logo,
  Fade,
  MatrixFx,
  CountFx,
} from "@once-ui-system/core";

export default function NosotrosPage() {
  // CountFx needs value to CHANGE to trigger animation
  // Start at 0, then set to target values after mount
  const [statsAnimated, setStatsAnimated] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setStatsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  // Use a constant rate (units per second) so all counters increment
  // at the same physical speed. Duration (ms) = (value / unitsPerSecond) * 1000
  const UNITS_PER_SECOND = 40; // adjust this to make counting faster/slower globally
  const speedFor = (target: number) => {
    const dur = Math.max(80, Math.round((Math.abs(target) / UNITS_PER_SECOND) * 1000));
    return dur;
  };
  return (
    <Column fillWidth>
      {/* Hero Section - keeping it as requested */}
      <Flex
        fillWidth
        position="relative"
        horizontal="center"
        vertical="center"
        paddingY="xl"
        className="nosotros-hero"
        style={{ minHeight: '80vh' }}
      >
        <Column 
          maxWidth="l" 
          gap="24" 
          horizontal="center" 
          style={{ 
            zIndex: 2, 
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }} 
          className="nosotros-hero-content"
        >
          <RevealFx delay={0} style={{ paddingLeft: '2rem', marginLeft: '-2rem', paddingRight: '2rem', marginRight: '-2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Heading variant="display-strong-l" align="center">
              Sobre Nosotros
            </Heading>
          </RevealFx>
          <RevealFx delay={0.2} style={{ paddingLeft: '2rem', marginLeft: '-2rem', paddingRight: '2rem', marginRight: '-2rem', width: '100%' }}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              Somos una agencia especializada en desarrollo de software, diseño digital y estrategia tecnológica.
              Transformamos ideas en productos digitales de alto impacto.
            </Text>
          </RevealFx>
        </Column>
      </Flex>

      {/* Mission & Vision - Asymmetric Bento Grid */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="0" gap="32" horizontal="center" style={{ margin: "0 auto" }}>
        {/* <RevealFx>
          <Column fillWidth horizontal="center" style={{ textAlign: 'center', margin: '0 auto' }}>
            <Heading variant="display-strong-s" align="center">
              <LetterFx trigger="instant" speed="slow">
                Nuestra Filosofía
              </LetterFx>
            </Heading>
          </Column>
        </RevealFx> */}

        <Column fillWidth gap="16">
          <Row fillWidth gap="16" className="stack-on-mobile">
            <Flex 
              flex={2} 
              padding="32" 
              radius="xl" 
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              direction="column"
              gap="16"
              className="mission-text"
              style={{ minHeight: '280px' }}
            >
              <Icon name="rocket" size="xl" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Nuestra Misión</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Transformar ideas en soluciones digitales de alto impacto, combinando innovación técnica con diseño centrado en el usuario para impulsar el crecimiento de empresas y startups en Paraguay y Latinoamérica.
              </Text>
            </Flex>
            <Flex 
              flex={3} 
              radius="xl"
              overflow="hidden"
              border="neutral-alpha-medium"
              className="mission-media"
              style={{ minHeight: '280px', position: 'relative' }}
            >
              <Media 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team collaboration" 
                fill
                sizes="600px"
              />

              {/* Overlayed mission content for mobile */}
              <Column className="mission-overlay" gap="12" style={{ display: 'none' }}>
                <Icon name="rocket" size="xl" onBackground="neutral-strong" />
                <Heading variant="heading-strong-l">Nuestra Misión</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Transformar ideas en soluciones digitales de alto impacto, combinando innovación técnica con diseño centrado en el usuario para impulsar el crecimiento de empresas y startups en Paraguay y Latinoamérica.
                </Text>
              </Column>
            </Flex>
          </Row>
          
          <Row fillWidth gap="16" className="stack-on-mobile">
            <Flex 
              flex={3} 
              radius="xl"
              overflow="hidden"
              border="neutral-alpha-medium"
              className="vision-media"
              style={{ minHeight: '280px', position: 'relative' }}
            >
              <Media 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Global technology" 
                fill
                sizes="600px"
              />

              {/* Overlayed vision content for mobile */}
              <Column className="vision-overlay" gap="12" style={{ display: 'none' }}>
                <Icon name="sparkle" size="xl" onBackground="neutral-strong" />
                <Heading variant="heading-strong-l">Nuestra Visión</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Ser referentes en el ecosistema tecnológico latinoamericano, demostrando que desde nuestra región podemos competir y destacar a nivel global con soluciones de clase mundial.
                </Text>
              </Column>
            </Flex>

            <Flex 
              flex={2} 
              padding="32" 
              radius="xl" 
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              direction="column"
              gap="16"
              className="vision-text"
              style={{ minHeight: '280px' }}
            >
              <Icon name="sparkle" size="xl" onBackground="neutral-strong" />
              <Heading variant="heading-strong-l">Nuestra Visión</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Ser referentes en el ecosistema tecnológico latinoamericano, demostrando que desde nuestra región podemos competir y destacar a nivel global con soluciones de clase mundial.
              </Text>
            </Flex>
          </Row>
        </Column>
      </Column>

      {/* Stats Section - Full Width with AutoScroll */}
      <Column fillWidth paddingY="xl" style={{ background: 'var(--surface)' }}>
        <Column fillWidth maxWidth="l" paddingX="l" horizontal="center" style={{ margin: "0 auto" }}>
            <Row fillWidth horizontal="between" vertical="center" gap="48" className="stack-on-mobile">
              <Column horizontal="center" gap="8">
                <Row horizontal="center" gap="0" vertical="center">
                  <CountFx variant="display-strong-l" value={statsAnimated ? 20 : 0} effect="simple" speed={speedFor(20)} />
                  <Text variant="display-strong-l">+</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">Proyectos Entregados</Text>
              </Column>
              <Line vert height="80" className="hide-on-mobile" />
              <Column horizontal="center" gap="8">
                <Row horizontal="center" gap="0" vertical="center">
                  <CountFx variant="display-strong-l" value={statsAnimated ? 3 : 0} effect="simple" speed={speedFor(3)} />
                  <Text variant="display-strong-l">+</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">Años de Experiencia</Text>
              </Column>
              <Line vert height="80" className="hide-on-mobile" />
              <Column horizontal="center" gap="8">
                <Row horizontal="center" gap="0" vertical="center">
                  <CountFx variant="display-strong-l" value={statsAnimated ? 100 : 0} effect="simple" speed={speedFor(100)} />
                  <Text variant="display-strong-l">%</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">Clientes Satisfechos</Text>
              </Column>
              <Line vert height="80" className="hide-on-mobile" />
              <Column horizontal="center" gap="8">
                <Row horizontal="center" gap="4" vertical="center">
                  <CountFx variant="display-strong-l" value={statsAnimated ? 8 : 0} effect="simple" speed={speedFor(8)} />
                  <Text variant="display-strong-l" style={{ marginLeft: 6 }}>semanas</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">Tiempo medio de entrega</Text>
              </Column>
            </Row>
        </Column>
      </Column>

      {/* Meet the Team Section */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="xl" horizontal="center" style={{ margin: "0 auto" }}>
        <RevealFx>
          <Column fillWidth horizontal="center" gap="16" style={{ textAlign: 'center', margin: '0 auto' }}>
            <Heading variant="display-strong-s" align="center">
              Conoce al Equipo
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Nuestro equipo diverso de expertos apasionados por la innovación y la tecnología.
            </Text>
          </Column>
        </RevealFx>

        <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="32" fillWidth style={{ marginTop: '48px' }}>
          <Flex
            padding="32"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="16"
            horizontal="center"
            fillWidth
          >
            <Avatar src="/images/avatars/davidgimenez.png" size="xl" />
            <Column gap="4" horizontal="center">
              <Text variant="heading-strong-m" align="center">David Giménez</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">CEO</Text>
            </Column>
            <Button href="https://www.linkedin.com/in/davidgimenezs" target="_blank" rel="noopener noreferrer" variant="tertiary" size="s" className="linkedin-button" style={{ borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '6px 12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', height: '12px' }}>
                <FaLinkedin size={12} />
              </span>
              <span style={{ fontSize: '12px', lineHeight: '12px', fontWeight: 500 }}>/ davidgimenezs</span>
            </Button>
          </Flex>

          <Flex
            padding="32"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="16"
            horizontal="center"
            fillWidth
          >
            <Avatar src="/images/avatars/estebanibarra.png" size="xl" />
            <Column gap="4" horizontal="center">
              <Text variant="heading-strong-m" align="center">Esteban Ibarra</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">CTO</Text>
            </Column>
            <Button href="https://www.linkedin.com/in/juanesibarraa" target="_blank" rel="noopener noreferrer" variant="tertiary" size="s" className="linkedin-button" style={{ borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '6px 12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', height: '12px' }}>
                <FaLinkedin size={12} />
              </span>
              <span style={{ fontSize: '12px', lineHeight: '12px', fontWeight: 500 }}>/ juanesibarraa</span>
            </Button>
          </Flex>

          <Flex
            padding="32"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="16"
            horizontal="center"
            fillWidth
          >
            <Avatar src="/images/avatars/oscaralderete.png" size="xl" />
            <Column gap="4" horizontal="center">
              <Text variant="heading-strong-m" align="center">Oscar Alderete</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">CIO</Text>
            </Column>
            <Button href="https://www.linkedin.com/in/oscaralderete/" target="_blank" rel="noopener noreferrer" variant="tertiary" size="s" className="linkedin-button" style={{ borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '6px 12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', height: '12px' }}>
                <FaLinkedin size={12} />
              </span>
              <span style={{ fontSize: '12px', lineHeight: '12px', fontWeight: 500 }}>/ oscaralderete</span>
            </Button>
          </Flex>

          <Flex
            padding="32"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="16"
            horizontal="center"
            fillWidth
          >
            <Avatar src="/images/avatars/ivanjara.png" size="xl" />
            <Column gap="4" horizontal="center">
              <Text variant="heading-strong-m" align="center">Iván Jara</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">COO</Text>
            </Column>
            <Button href="https://www.linkedin.com/in/ivanjaraa/" target="_blank" rel="noopener noreferrer" variant="tertiary" size="s" className="linkedin-button" style={{ borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '6px 12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', height: '12px' }}>
                <FaLinkedin size={12} />
              </span>
              <span style={{ fontSize: '12px', lineHeight: '12px', fontWeight: 500 }}>/ ivanjaraa</span>
            </Button>
          </Flex>

          <Flex
            padding="32"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="16"
            horizontal="center"
            fillWidth
          >
            <Avatar src="/images/avatars/danielvillalba.png" size="xl" />
            <Column gap="4" horizontal="center">
              <Text variant="heading-strong-m" align="center">Daniel Villalba</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">CMO</Text>
            </Column>
            <Button href="https://www.linkedin.com/in/danivillalba03" target="_blank" rel="noopener noreferrer" variant="tertiary" size="s" className="linkedin-button" style={{ borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '6px 12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', height: '12px' }}>
                <FaLinkedin size={12} />
              </span>
              <span style={{ fontSize: '12px', lineHeight: '12px', fontWeight: 500 }}>/ danielvillalba03</span>
            </Button>
          </Flex>

          <Flex
            padding="32"
            radius="l"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="16"
            horizontal="center"
            fillWidth
          >
            <Avatar src="/images/avatars/matteomartinez.png" size="xl" />
            <Column gap="4" horizontal="center">
              <Text variant="heading-strong-m" align="center">Matteo Martínez</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">CSO</Text>
            </Column>
            <Button href="https://www.linkedin.com/in/matteomartinez12/" target="_blank" rel="noopener noreferrer" variant="tertiary" size="s" className="linkedin-button" style={{ borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '6px 12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', height: '12px' }}>
                <FaLinkedin size={12} />
              </span>
              <span style={{ fontSize: '12px', lineHeight: '12px', fontWeight: 500 }}>/ matteomartinez12</span>
            </Button>
          </Flex>
        </Grid>
      </Column>

      {/* Values Section - Alternating Layout */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="xl" gap="64" horizontal="center" style={{ margin: "0 auto" }}>
        <RevealFx>
          <Column fillWidth horizontal="center" gap="16" style={{ textAlign: 'center', margin: '0 auto' }}>
            <Heading variant="display-strong-s" align="center">
              Nuestros Valores
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Los principios que guían cada decisión y cada línea de código que escribimos
            </Text>
          </Column>
        </RevealFx>

        {/* Value 1 */}
        <RevealFx>
          <Row fillWidth gap="48" vertical="center" className="stack-on-mobile">
            <Flex flex={1} horizontal="center">
              <Flex 
                padding="32" 
                radius="full" 
                border="neutral-alpha-medium"
                background="neutral-alpha-weak"
                style={{ width: '160px', height: '160px' }}
                center
              >
                <Icon name="sparkle" size="xl" onBackground="neutral-strong" />
              </Flex>
            </Flex>
            <Column flex={2} gap="16">
              <Heading variant="heading-strong-xl">Innovación Constante</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                No nos conformamos con soluciones estándar. Adoptamos las tecnologías más recientes y mejores prácticas para crear productos que marcan la diferencia en el mercado. Cada proyecto es una oportunidad para superar límites.
              </Text>
            </Column>
          </Row>
        </RevealFx>

        <Line />

        {/* Value 2 */}
        <RevealFx>
          <Row fillWidth gap="48" vertical="center" className="stack-on-mobile">
            <Column flex={2} gap="16">
              <Heading variant="heading-strong-xl">Compromiso Total</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                Trabajamos codo a codo con nuestros clientes, comprometiéndonos con el éxito de cada proyecto como si fuera propio. Tu visión se convierte en nuestra misión, y no descansamos hasta verla materializada.
              </Text>
            </Column>
            <Flex flex={1} horizontal="center">
              <Flex 
                padding="32" 
                radius="full" 
                border="neutral-alpha-medium"
                background="neutral-alpha-weak"
                style={{ width: '160px', height: '160px' }}
                center
              >
                <Icon name="check" size="xl" onBackground="neutral-strong" />
              </Flex>
            </Flex>
          </Row>
        </RevealFx>

        <Line />

        {/* Value 3 */}
        <RevealFx>
          <Row fillWidth gap="48" vertical="center" className="stack-on-mobile">
            <Flex flex={1} horizontal="center">
              <Flex 
                padding="32" 
                radius="full" 
                border="neutral-alpha-medium"
                background="neutral-alpha-weak"
                style={{ width: '160px', height: '160px' }}
                center
              >
                <Icon name="security" size="xl" onBackground="neutral-strong" />
              </Flex>
            </Flex>
            <Column flex={2} gap="16">
              <Heading variant="heading-strong-xl">Excelencia Técnica</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                Código limpio, arquitecturas escalables y soluciones robustas son nuestra firma en cada entrega. Aplicamos las mejores prácticas de la industria para garantizar que tu producto sea mantenible y crezca contigo.
              </Text>
            </Column>
          </Row>
        </RevealFx>
      </Column>



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

      <style dangerouslySetInnerHTML={{ __html: `
        .stack-on-mobile { display: flex; }
        @media (max-width: 767px) { 
          .stack-on-mobile { flex-direction: column !important; } 
          .hide-on-mobile { display: none !important; }
          /* Vision overlay defaults */
          .vision-overlay { display: none; }
          .vision-text { display: block; }
          /* Mission overlay defaults */
          .mission-overlay { display: none; }
          .mission-text { display: block; }

          /* Overlay styles when active on mobile */
          .vision-media, .mission-media { position: relative; }
          .vision-overlay, .mission-overlay { display: flex !important; position: absolute; left: 12px; right: 12px; bottom: 12px; background: rgba(10,10,10,0.6); padding: 16px; border-radius: 12px; }
          .vision-overlay > *, .mission-overlay > * { color: var(--neutral-on-background-weak); }
          .vision-text, .mission-text { display: none !important; }
        }
      ` }} />
    </Column>
  );
}
