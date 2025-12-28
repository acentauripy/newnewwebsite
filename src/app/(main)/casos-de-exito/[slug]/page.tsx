"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import {
  Column,
  Row,
  Flex,
  Grid,
  Card,
  Media,
  Avatar,
  Heading,
  Text,
  Button,
  Icon,
  Tag,
  Line,
  RevealFx,
  MatrixFx,
} from "@once-ui-system/core";

// Full case study data with detailed information
const caseStudiesData: Record<string, CaseStudyDetail> = {
  "plataforma-educativa-guarani": {
    slug: "plataforma-educativa-guarani",
    title: "Plataforma Educativa Guaraní",
    client: "Ministerio de Educación",
    category: "Educación",
    image: "/images/home/card3.jpg",
    summary: "Sistema de gestión educativa que conecta a más de 500,000 estudiantes con recursos de aprendizaje personalizados.",
    tags: ["Next.js", "PostgreSQL", "AWS", "React Native"],
    year: "2024",
    duration: "8 meses",
    team: "6 desarrolladores",
    challenge: "El Ministerio de Educación necesitaba una plataforma centralizada para gestionar contenido educativo, seguimiento de estudiantes y comunicación entre docentes y familias. El sistema debía funcionar en zonas con conectividad limitada y ser accesible desde dispositivos móviles.",
    solution: "Desarrollamos una plataforma web y móvil con funcionalidades offline-first, sincronización inteligente de datos y un sistema de contenido adaptativo que personaliza el aprendizaje según el progreso de cada estudiante.",
    results: [
      { metric: "500,000+", label: "Estudiantes activos" },
      { metric: "15,000+", label: "Docentes registrados" },
      { metric: "40%", label: "Mejora en engagement" },
      { metric: "99.9%", label: "Uptime del sistema" },
    ],
    testimonial: {
      quote: "La plataforma transformó completamente cómo gestionamos la educación en Paraguay. La colaboración con Acentauri fue excepcional.",
      author: "María González",
      role: "Directora de Tecnología Educativa",
    },
    gallery: [
      "/images/home/card1.jpg",
      "/images/home/card2.jpg",
      "/images/home/card3.jpg",
    ],
  },
  "app-fintech-pagos": {
    slug: "app-fintech-pagos",
    title: "App de Pagos Digitales",
    client: "FinBank Paraguay",
    category: "Fintech",
    image: "/images/home/card1.jpg",
    summary: "Aplicación móvil de pagos con más de 200,000 usuarios activos mensuales y procesamiento de transacciones en tiempo real.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    year: "2024",
    duration: "6 meses",
    team: "5 desarrolladores",
    challenge: "FinBank necesitaba modernizar su infraestructura de pagos móviles para competir con las fintech emergentes. Requerían una app rápida, segura y con una experiencia de usuario superior.",
    solution: "Creamos una aplicación móvil nativa con React Native, integrando autenticación biométrica, procesamiento de pagos en tiempo real y un sistema de notificaciones push para mantener a los usuarios informados.",
    results: [
      { metric: "200,000+", label: "Usuarios activos" },
      { metric: "$50M", label: "Transacciones mensuales" },
      { metric: "4.8★", label: "Rating en tiendas" },
      { metric: "<100ms", label: "Tiempo de respuesta" },
    ],
    testimonial: {
      quote: "La app superó nuestras expectativas. El equipo de Acentauri entendió perfectamente nuestras necesidades y las convirtió en realidad.",
      author: "Carlos Méndez",
      role: "CTO, FinBank Paraguay",
    },
    gallery: [
      "/images/home/card2.jpg",
      "/images/home/card3.jpg",
      "/images/home/card1.jpg",
    ],
  },
  "sistema-logistico-supply": {
    slug: "sistema-logistico-supply",
    title: "Sistema Logístico Inteligente",
    client: "TransLog S.A.",
    category: "Logística",
    image: "/images/home/card2.jpg",
    summary: "Plataforma de gestión logística con optimización de rutas mediante IA, reduciendo costos operativos en un 35%.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
    year: "2023",
    duration: "10 meses",
    team: "7 desarrolladores",
    challenge: "TransLog operaba con sistemas legacy que no permitían optimización de rutas ni visibilidad en tiempo real. Los costos de combustible y tiempo de entrega estaban aumentando significativamente.",
    solution: "Implementamos un sistema de gestión logística con algoritmos de IA para optimización de rutas, tracking GPS en tiempo real y dashboards analíticos para toma de decisiones.",
    results: [
      { metric: "35%", label: "Reducción de costos" },
      { metric: "25%", label: "Menos tiempo de entrega" },
      { metric: "1,000+", label: "Vehículos gestionados" },
      { metric: "98%", label: "Precisión en ETAs" },
    ],
    testimonial: {
      quote: "El sistema de IA cambió completamente nuestra operación. Ahora tomamos decisiones basadas en datos reales.",
      author: "Roberto Fernández",
      role: "Director de Operaciones",
    },
    gallery: [
      "/images/home/card3.jpg",
      "/images/home/card1.jpg",
      "/images/home/card2.jpg",
    ],
  },
  "ecommerce-marketplace": {
    slug: "ecommerce-marketplace",
    title: "Marketplace Regional",
    client: "MercadoPY",
    category: "E-commerce",
    image: "/images/home/card3.jpg",
    summary: "Plataforma de comercio electrónico que conecta a más de 5,000 vendedores con compradores en toda la región.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    year: "2023",
    duration: "12 meses",
    team: "8 desarrolladores",
    challenge: "MercadoPY quería crear un marketplace que compitiera con los gigantes del e-commerce, ofreciendo una experiencia local superior y comisiones más justas para vendedores.",
    solution: "Desarrollamos una plataforma escalable con sistema de pagos integrado, gestión de inventario automatizada y herramientas de marketing para vendedores.",
    results: [
      { metric: "5,000+", label: "Vendedores activos" },
      { metric: "$10M", label: "GMV mensual" },
      { metric: "50,000+", label: "Productos listados" },
      { metric: "95%", label: "Satisfacción vendedores" },
    ],
    testimonial: {
      quote: "Acentauri nos ayudó a construir una plataforma que realmente entiende el mercado paraguayo.",
      author: "Ana Martínez",
      role: "CEO, MercadoPY",
    },
    gallery: [
      "/images/home/card1.jpg",
      "/images/home/card2.jpg",
      "/images/home/card3.jpg",
    ],
  },
  "iot-agricultura": {
    slug: "iot-agricultura",
    title: "IoT para Agricultura",
    client: "AgroTech Paraguay",
    category: "AgTech",
    image: "/images/home/card1.jpg",
    summary: "Sistema de monitoreo agrícola con sensores IoT que optimiza el riego y aumenta la producción en un 25%.",
    tags: ["IoT", "Python", "React", "AWS IoT"],
    year: "2023",
    duration: "9 meses",
    team: "5 desarrolladores",
    challenge: "Los productores agrícolas enfrentaban pérdidas significativas por riego ineficiente y falta de datos sobre condiciones del suelo y clima.",
    solution: "Implementamos una red de sensores IoT conectados a una plataforma central que analiza datos en tiempo real y automatiza el riego basándose en condiciones óptimas.",
    results: [
      { metric: "25%", label: "Aumento producción" },
      { metric: "40%", label: "Ahorro de agua" },
      { metric: "10,000", label: "Hectáreas monitoreadas" },
      { metric: "500+", label: "Sensores desplegados" },
    ],
    testimonial: {
      quote: "La tecnología IoT transformó nuestra forma de cultivar. Ahora tenemos control total sobre nuestros campos.",
      author: "Juan Pérez",
      role: "Productor Agrícola",
    },
    gallery: [
      "/images/home/card2.jpg",
      "/images/home/card3.jpg",
      "/images/home/card1.jpg",
    ],
  },
  "portal-gobierno-digital": {
    slug: "portal-gobierno-digital",
    title: "Portal de Gobierno Digital",
    client: "Gobierno de Paraguay",
    category: "GovTech",
    image: "/images/home/card2.jpg",
    summary: "Portal unificado de servicios gubernamentales que simplifica trámites para más de 2 millones de ciudadanos.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
    year: "2022",
    duration: "18 meses",
    team: "12 desarrolladores",
    challenge: "Los ciudadanos debían visitar múltiples oficinas y sitios web para realizar trámites gubernamentales. El proceso era lento, confuso y generaba frustración.",
    solution: "Creamos un portal unificado con autenticación única, seguimiento de trámites en tiempo real y sistema de citas online para servicios presenciales.",
    results: [
      { metric: "2M+", label: "Ciudadanos registrados" },
      { metric: "70%", label: "Reducción tiempo trámites" },
      { metric: "100+", label: "Servicios integrados" },
      { metric: "4.5★", label: "Satisfacción ciudadana" },
    ],
    testimonial: {
      quote: "Este portal representa un hito en la modernización del Estado paraguayo. Acentauri fue clave en hacerlo realidad.",
      author: "Dr. Luis Ramírez",
      role: "Secretario de Gobierno Digital",
    },
    gallery: [
      "/images/home/card3.jpg",
      "/images/home/card1.jpg",
      "/images/home/card2.jpg",
    ],
  },
};

interface CaseStudyDetail {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  summary: string;
  tags: string[];
  year: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: string[];
}

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const caseStudy = caseStudiesData[slug];
  
  // Get related projects (same category, excluding current)
  const relatedProjects = Object.values(caseStudiesData)
    .filter(c => c.category === caseStudy?.category && c.slug !== slug)
    .slice(0, 2);

  if (!caseStudy) {
    return (
      <Column fillWidth paddingTop="xl" paddingY="l" gap="64" horizontal="center">
        <Column horizontal="center" gap="16" paddingY="64">
          <Icon name="alertCircle" size="xl" onBackground="neutral-weak" />
          <Heading variant="heading-strong-l">Proyecto no encontrado</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            El caso de estudio que buscas no existe.
          </Text>
          <Button href="/casos-de-exito" variant="secondary">
            <Icon name="chevronLeft" size="xs" />
            Volver a casos de éxito
          </Button>
        </Column>
      </Column>
    );
  }

  return (
    <Column fillWidth paddingTop="xl" paddingY="l" gap="64">
      {/* Back Button */}
      <Row fillWidth horizontal="center">
        <Row
          fillWidth
          horizontal="start"
          style={{ maxWidth: "var(--responsive-width-l)" }}
          paddingX="l"
        >
          <Button
            href="/casos-de-exito"
            variant="secondary"
            size="s"
            style={{ 
              width: "fit-content", 
              borderWidth: "2px"
            }}
          >
            <Icon name="chevronLeft" size="xs" />
            Volver a casos de éxito
          </Button>
        </Row>
      </Row>

      {/* Hero Header */}
      <Column fillWidth horizontal="center" paddingX="l">
        <Column fillWidth maxWidth="l" gap="32">
          <RevealFx>
            <Column fillWidth gap="16">
              <Row gap="12" vertical="center">
                <Tag size="m" variant="brand">{caseStudy.category}</Tag>
                <Text variant="label-default-s" onBackground="neutral-weak">{caseStudy.year}</Text>
              </Row>
              <Heading variant="display-strong-l">
                {caseStudy.title}
              </Heading>
              <Text variant="heading-default-m" onBackground="neutral-weak">
                {caseStudy.client}
              </Text>
            </Column>
          </RevealFx>
          
          <RevealFx delay={0.1}>
            <Media
              src={caseStudy.image}
              alt={caseStudy.title}
              aspectRatio="21/9"
              radius="xl"
              sizes="100vw"
              border="neutral-alpha-weak"
            />
          </RevealFx>
        </Column>
      </Column>

      {/* Project Overview */}
      <Column fillWidth horizontal="center" paddingX="l">
        <Grid columns="3" gap="24" fillWidth maxWidth="l" s={{ columns: "1" }}>
          <RevealFx delay={0.15}>
            <Flex
              padding="24"
              radius="l"
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              direction="column"
              gap="8"
              fillWidth
            >
              <Icon name="clock" size="m" onBackground="brand-medium" />
              <Text variant="label-strong-s" onBackground="neutral-weak">Duración</Text>
              <Text variant="heading-strong-m">{caseStudy.duration}</Text>
            </Flex>
          </RevealFx>
          <RevealFx delay={0.2}>
            <Flex
              padding="24"
              radius="l"
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              direction="column"
              gap="8"
              fillWidth
            >
              <Icon name="user" size="m" onBackground="brand-medium" />
              <Text variant="label-strong-s" onBackground="neutral-weak">Equipo</Text>
              <Text variant="heading-strong-m">{caseStudy.team}</Text>
            </Flex>
          </RevealFx>
          <RevealFx delay={0.25}>
            <Flex
              padding="24"
              radius="l"
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              direction="column"
              gap="8"
              fillWidth
            >
              <Icon name="code" size="m" onBackground="brand-medium" />
              <Text variant="label-strong-s" onBackground="neutral-weak">Tecnologías</Text>
              <Row gap="8" wrap>
                {caseStudy.tags.map((tag) => (
                  <Tag key={tag} size="s" variant="neutral">{tag}</Tag>
                ))}
              </Row>
            </Flex>
          </RevealFx>
        </Grid>
      </Column>

      {/* Challenge & Solution */}
      <Column fillWidth horizontal="center" paddingX="l">
        <Grid columns="2" gap="48" fillWidth maxWidth="l" s={{ columns: "1" }}>
          <RevealFx delay={0.3}>
            <Column gap="16">
              <Row gap="12" vertical="center">
                <Icon name="alertTriangle" size="m" onBackground="danger-medium" />
                <Heading variant="heading-strong-l">El Desafío</Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {caseStudy.challenge}
              </Text>
            </Column>
          </RevealFx>
          <RevealFx delay={0.35}>
            <Column gap="16">
              <Row gap="12" vertical="center">
                <Icon name="checkCircle" size="m" onBackground="success-medium" />
                <Heading variant="heading-strong-l">La Solución</Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {caseStudy.solution}
              </Text>
            </Column>
          </RevealFx>
        </Grid>
      </Column>

      {/* Results */}
      <Column fillWidth horizontal="center" paddingX="l">
        <Column fillWidth maxWidth="l" gap="32">
          <RevealFx>
            <Heading variant="heading-strong-xl" align="center">
              Resultados
            </Heading>
          </RevealFx>
          <Grid columns="4" gap="16" fillWidth m={{ columns: "2" }} s={{ columns: "2" }}>
            {caseStudy.results.map((result, index) => (
              <RevealFx key={result.label} delay={0.1 * index}>
                <Flex
                  padding="24"
                  radius="l"
                  border="neutral-alpha-medium"
                  direction="column"
                  gap="8"
                  horizontal="center"
                  fillWidth
                >
                  <Heading variant="display-strong-m" onBackground="brand-strong">
                    {result.metric}
                  </Heading>
                  <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                    {result.label}
                  </Text>
                </Flex>
              </RevealFx>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* Testimonial */}
      <Column fillWidth horizontal="center" paddingX="l">
        <RevealFx>
          <Flex
            fillWidth
            maxWidth="m"
            padding="48"
            radius="xl"
            border="neutral-alpha-medium"
            background="neutral-alpha-weak"
            direction="column"
            gap="24"
            horizontal="center"
          >
            <Icon name="quote" size="xl" onBackground="brand-weak" />
            <Text 
              variant="body-default-xl" 
              align="center"
              style={{ fontStyle: 'italic' }}
            >
              "{caseStudy.testimonial.quote}"
            </Text>
            <Column horizontal="center" gap="4">
              <Text variant="label-strong-m">
                {caseStudy.testimonial.author}
              </Text>
              <Text variant="label-default-s" onBackground="neutral-weak">
                {caseStudy.testimonial.role}
              </Text>
            </Column>
          </Flex>
        </RevealFx>
      </Column>

      {/* Gallery */}
      {caseStudy.gallery.length > 0 && (
        <Column fillWidth horizontal="center" paddingX="l">
          <Column fillWidth maxWidth="l" gap="24">
            <Heading variant="heading-strong-l">
              Galería del Proyecto
            </Heading>
            <Grid columns="3" gap="16" fillWidth s={{ columns: "1" }}>
              {caseStudy.gallery.map((image, index) => (
                <RevealFx key={index} delay={0.1 * index}>
                  <Media
                    src={image}
                    alt={`${caseStudy.title} - imagen ${index + 1}`}
                    aspectRatio="4/3"
                    radius="l"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    border="neutral-alpha-weak"
                  />
                </RevealFx>
              ))}
            </Grid>
          </Column>
        </Column>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Column fillWidth horizontal="center" paddingX="l">
          <Column fillWidth maxWidth="l" gap="24">
            <Line />
            <Heading variant="heading-strong-l">
              Proyectos Relacionados
            </Heading>
            <Grid columns="2" gap="24" fillWidth s={{ columns: "1" }}>
              {relatedProjects.map((project, index) => (
                <RevealFx key={project.slug} delay={0.1 * index}>
                  <Card
                    href={`/casos-de-exito/${project.slug}`}
                    radius="l-4"
                    direction="column"
                    fillWidth
                    padding="4"
                  >
                    <Media
                      src={project.image}
                      alt={project.title}
                      aspectRatio="16/9"
                      radius="l"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Column fillWidth padding="16" gap="8">
                      <Tag size="s" variant="brand">{project.category}</Tag>
                      <Heading variant="heading-strong-m">{project.title}</Heading>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {project.client}
                      </Text>
                    </Column>
                  </Card>
                </RevealFx>
              ))}
            </Grid>
          </Column>
        </Column>
      )}

      {/* CTA */}
      <Column fillWidth horizontal="center" paddingX="l">
        <RevealFx>
          <Flex
            fillWidth
            maxWidth="l"
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
                repeat: true,
              }}
            />
            <Heading variant="display-strong-s" align="center">
              ¿Querés resultados similares?
            </Heading>
            <Text 
              variant="body-default-l" 
              onBackground="neutral-weak" 
              align="center" 
              style={{ maxWidth: '500px' }}
            >
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
            </Text>
            <Button href="/contacto" size="l" arrowIcon>
              Contactar equipo
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
