"use client";

import {
  Column,
  Row,
  Flex,
  Text,
  Heading,
  Button,
  Grid,
  Media,
  Card,
  Icon,
  RevealFx,
  MatrixFx,
  Tag,
  Line,
} from "@once-ui-system/core";
import { useState } from "react";

// Case Study data - sample projects
const caseStudies = [
  {
    slug: "plataforma-educativa-guarani",
    title: "Plataforma Educativa Guaraní",
    client: "Ministerio de Educación",
    category: "Educación",
    image: "/images/home/card3.jpg",
    summary: "Sistema de gestión educativa que conecta a más de 500,000 estudiantes con recursos de aprendizaje personalizados.",
    tags: ["Next.js", "PostgreSQL", "AWS", "React Native"],
    year: "2024",
    featured: true,
  },
  {
    slug: "app-fintech-pagos",
    title: "App de Pagos Digitales",
    client: "FinBank Paraguay",
    category: "Fintech",
    image: "/images/home/card1.jpg",
    summary: "Aplicación móvil de pagos con más de 200,000 usuarios activos mensuales y procesamiento de transacciones en tiempo real.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    year: "2024",
    featured: true,
  },
  {
    slug: "sistema-logistico-supply",
    title: "Sistema Logístico Inteligente",
    client: "TransLog S.A.",
    category: "Logística",
    image: "/images/home/card2.jpg",
    summary: "Plataforma de gestión logística con optimización de rutas mediante IA, reduciendo costos operativos en un 35%.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
    year: "2023",
    featured: false,
  },
  {
    slug: "ecommerce-marketplace",
    title: "Marketplace Regional",
    client: "MercadoPY",
    category: "E-commerce",
    image: "/images/home/card3.jpg",
    summary: "Plataforma de comercio electrónico que conecta a más de 5,000 vendedores con compradores en toda la región.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    year: "2023",
    featured: false,
  },
  {
    slug: "iot-agricultura",
    title: "IoT para Agricultura",
    client: "AgroTech Paraguay",
    category: "AgTech",
    image: "/images/home/card1.jpg",
    summary: "Sistema de monitoreo agrícola con sensores IoT que optimiza el riego y aumenta la producción en un 25%.",
    tags: ["IoT", "Python", "React", "AWS IoT"],
    year: "2023",
    featured: false,
  },
  {
    slug: "portal-gobierno-digital",
    title: "Portal de Gobierno Digital",
    client: "Gobierno de Paraguay",
    category: "GovTech",
    image: "/images/home/card2.jpg",
    summary: "Portal unificado de servicios gubernamentales que simplifica trámites para más de 2 millones de ciudadanos.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
    year: "2022",
    featured: false,
  },
];

const categories = ["Todos", "Educación", "Fintech", "Logística", "E-commerce", "AgTech", "GovTech"];

export default function CasosDeExitoPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCases = selectedCategory === "Todos"
    ? caseStudies
    : caseStudies.filter((c) => c.category === selectedCategory);

  const featuredCases = filteredCases.filter(c => c.featured);
  const otherCases = filteredCases.filter(c => !c.featured);

  return (
    <Column fillWidth horizontal="center" paddingTop="xl" paddingY="l">
      <Column fillWidth maxWidth="l" gap="48" paddingX="l">
        
        {/* Hero Section */}
        <RevealFx>
          <Column fillWidth gap="24" horizontal="center" paddingY="48">
            <Heading variant="display-strong-l" align="center">
              Casos de Éxito
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
              style={{ maxWidth: '700px' }}
            >
              Descubrí cómo ayudamos a empresas y organizaciones a transformar sus ideas en productos digitales de alto impacto.
            </Text>
          </Column>
        </RevealFx>

        {/* Category Filter */}
        <Row fillWidth gap="8" horizontal="center" wrap>
          {categories.map((category) => (
            <Button
              key={category}
              size="s"
              variant={selectedCategory === category ? "primary" : "secondary"}
              onClick={() => setSelectedCategory(category)}
              style={{
                borderWidth: selectedCategory === category ? undefined : '2px',
              }}
            >
              {category}
            </Button>
          ))}
        </Row>

        {/* Featured Projects - Large Cards */}
        {featuredCases.length > 0 && (
          <Column fillWidth gap="24">
            <Row fillWidth horizontal="start" vertical="center" gap="8">
              <Icon name="star" size="s" onBackground="brand-medium" />
              <Text variant="label-strong-m" onBackground="neutral-weak">
                Proyectos Destacados
              </Text>
            </Row>
            
            <Grid columns="2" gap="24" fillWidth s={{ columns: "1" }}>
              {featuredCases.map((caseStudy, index) => (
                <RevealFx key={caseStudy.slug} delay={index * 0.1}>
                  <Card
                    href={`/casos-de-exito/${caseStudy.slug}`}
                    radius="l-4"
                    direction="column"
                    fillWidth
                    style={{ height: '100%' }}
                  >
                    <Media
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      aspectRatio="16/9"
                      radius="l"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Column fillWidth padding="24" gap="16">
                      <Row fillWidth horizontal="between" vertical="center">
                        <Tag size="s" variant="brand">
                          {caseStudy.category}
                        </Tag>
                        <Text variant="label-default-s" onBackground="neutral-weak">
                          {caseStudy.year}
                        </Text>
                      </Row>
                      <Heading variant="heading-strong-l">
                        {caseStudy.title}
                      </Heading>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {caseStudy.client}
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-medium">
                        {caseStudy.summary}
                      </Text>
                      <Row gap="8" wrap>
                        {caseStudy.tags.slice(0, 3).map((tag) => (
                          <Tag key={tag} size="s" variant="neutral">
                            {tag}
                          </Tag>
                        ))}
                        {caseStudy.tags.length > 3 && (
                          <Tag size="s" variant="neutral">
                            +{caseStudy.tags.length - 3}
                          </Tag>
                        )}
                      </Row>
                    </Column>
                  </Card>
                </RevealFx>
              ))}
            </Grid>
          </Column>
        )}

        {/* Other Projects - Grid */}
        {otherCases.length > 0 && (
          <Column fillWidth gap="24">
            {featuredCases.length > 0 && (
              <Row fillWidth horizontal="start" vertical="center" gap="8">
                <Icon name="folder" size="s" onBackground="neutral-medium" />
                <Text variant="label-strong-m" onBackground="neutral-weak">
                  Más Proyectos
                </Text>
              </Row>
            )}
            
            <Grid columns="3" gap="16" fillWidth m={{ columns: "2" }} s={{ columns: "1" }}>
              {otherCases.map((caseStudy, index) => (
                <RevealFx key={caseStudy.slug} delay={index * 0.05}>
                  <Card
                    href={`/casos-de-exito/${caseStudy.slug}`}
                    radius="l-4"
                    direction="column"
                    fillWidth
                    padding="4"
                    style={{ height: '100%' }}
                  >
                    <Media
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      aspectRatio="16/9"
                      radius="l"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <Column fillWidth padding="16" gap="12">
                      <Row fillWidth horizontal="between" vertical="center">
                        <Tag size="s" variant="brand">
                          {caseStudy.category}
                        </Tag>
                        <Text variant="label-default-s" onBackground="neutral-weak">
                          {caseStudy.year}
                        </Text>
                      </Row>
                      <Heading variant="heading-strong-m">
                        {caseStudy.title}
                      </Heading>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {caseStudy.client}
                      </Text>
                      <Text 
                        variant="body-default-s" 
                        onBackground="neutral-medium"
                        style={{ 
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {caseStudy.summary}
                      </Text>
                    </Column>
                  </Card>
                </RevealFx>
              ))}
            </Grid>
          </Column>
        )}

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <Column fillWidth horizontal="center" paddingY="64" gap="16">
            <Icon name="search" size="xl" onBackground="neutral-weak" />
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              No hay proyectos en esta categoría aún.
            </Text>
            <Button variant="secondary" onClick={() => setSelectedCategory("Todos")}>
              Ver todos los proyectos
            </Button>
          </Column>
        )}

        {/* CTA Section */}
        <Column fillWidth paddingY="48">
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
                  repeat: true,
                }}
              />
              <Heading variant="display-strong-s" align="center">
                ¿Tenés un proyecto en mente?
              </Heading>
              <Text 
                variant="body-default-l" 
                onBackground="neutral-weak" 
                align="center" 
                style={{ maxWidth: '500px' }}
              >
                Trabajemos juntos para convertir tu idea en el próximo caso de éxito.
              </Text>
              <Button href="/contacto" size="l" arrowIcon>
                Comenzar un proyecto
              </Button>
            </Flex>
          </RevealFx>
        </Column>
        
      </Column>
    </Column>
  );
}
