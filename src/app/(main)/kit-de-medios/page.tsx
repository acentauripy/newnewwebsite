"use client";

import {
  Column,
  Row,
  Flex,
  Text,
  Heading,
  Icon,
  Button,
  Grid,
  Media,
  Logo,
  MatrixFx,
} from "@once-ui-system/core";

// Logo assets for download
const logoAssets = [
  {
    name: "Logo Principal",
    description: "Logo completo para fondos oscuros",
    previewDark: "/trademarks/icon-dark.svg",
    previewLight: "/trademarks/icon-light.svg",
    downloadLight: "/trademarks/icon-light.svg",
    downloadDark: "/trademarks/icon-dark.svg",
  },
  {
    name: "Wordmark",
    description: "Logotipo de texto para fondos oscuros",
    previewDark: "/trademarks/wordmark-dark.svg",
    previewLight: "/trademarks/wordmark-light.svg",
    downloadLight: "/trademarks/wordmark-light.svg",
    downloadDark: "/trademarks/wordmark-dark.svg",
  },
];

export default function KitDeMediosPage() {
  return (
    <Column fillWidth>
      {/* Hero Section */}
      <Column
        fillWidth
        center
        padding="l"
        style={{ minHeight: "20vh" }}
      >
        <Column maxWidth="m" horizontal="center" gap="l" align="center">
          <Heading 
            variant="display-strong-l" 
            marginTop="128" 
            style={{ fontSize: 'clamp(40px, 8vw, 64px)' }}
          >
            Kit de Medios
          </Heading>
          <Text 
            variant="body-default-xl" 
            style={{ color: '#E0E0E0' }} 
            wrap="balance" 
            marginBottom="32"
          >
            Recursos oficiales de marca para prensa, partners y colaboradores.
          </Text>
        </Column>
      </Column>

    {/* Quick Download Section */}
      {/* <Column
        fillWidth
        maxWidth="l"
        paddingX="l"
        paddingY="xl"
        gap="32"
        horizontal="center"
        style={{ margin: "0 auto" }}
      >
        <Flex
          fillWidth
          padding="32"
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
          />
          <Icon name="HiOutlineFolder" size="xl" onBackground="brand-medium" />
          <Column gap="8" horizontal="center">
            <Heading variant="heading-strong-l" align="center">
              Descargar Todo
            </Heading>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              align="center"
            >
              Obtené todos los recursos de marca en un solo archivo ZIP
            </Text>
          </Column>
          <Button
            href="/downloads/acentauri-brand-kit.zip"
            size="l"
            prefixIcon="HiOutlineArrowDownTray"
          >
            Descargar Kit Completo
          </Button>
        </Flex>
      </Column> */}

      {/* Logos Section */}
      <Column fillWidth style={{ background: "var(--surface)" }}>
        <Column
          fillWidth
          maxWidth="l"
          paddingX="l"
          paddingY="xl"
          gap="48"
          horizontal="center"
          style={{ margin: "0 auto" }}
        >
          {/* <Column
            fillWidth
            horizontal="center"
            gap="16"
            style={{ textAlign: "center" }}
          >
            <Heading variant="display-strong-s" align="center">
              Logotipos
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              Nuestros logos están disponibles en formatos SVG y PNG. Usá la
              versión correcta según el fondo.
            </Text>
          </Column> */}

          {/* Dark Mode Logos */}
          <Grid fillWidth columns="3" gap="24" className="grid-3-2">
            {logoAssets.map((asset, index) => (
              <Flex
                key={`${asset.name}-dark`}
                fillWidth
                radius="l"
                border="neutral-alpha-medium"
                background="surface"
                direction="column"
                padding="0"
                style={{ overflow: "visible" }}
              >
                {/* Preview area with dark background */}
                <Flex
                  fillWidth
                  horizontal="center"
                  vertical="center"
                  padding="48"
                  style={{
                    background: "#0A0A0A",
                    borderRadius: "var(--radius-l) var(--radius-l) 0 0",
                    height: "200px",
                    overflow: "visible",
                  }}
                >
                  <Media
                    src={asset.previewDark}
                    alt={`${asset.name} - Oscuro`}
                    style={{ 
                      maxWidth: "100%", 
                      width: "200px",
                      height: "auto", 
                      objectFit: "contain",
                      display: "block"
                    }}
                    sizes="200px"
                  />
                </Flex>
                <Column fillWidth padding="20" gap="16">
                  <Column gap="4">
                    <Text
                      variant="heading-strong-m"
                      onBackground="neutral-strong"
                    >
                      {asset.name}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {asset.description}
                    </Text>
                  </Column>
                  <Button
                    href={asset.downloadDark}
                    variant="secondary"
                    size="s"
                    prefixIcon="HiOutlineArrowDownTray"
                    fillWidth
                  >
                    Descargar
                  </Button>
                </Column>
              </Flex>
            ))}

            {/* Logo with wordmark combined - Dark */}
            <Flex
              fillWidth
              radius="l"
              border="neutral-alpha-medium"
              background="surface"
              direction="column"
              padding="0"
              className="logo-completo-card"
              style={{ overflow: "visible" }}
            >
              <Flex
                fillWidth
                horizontal="center"
                vertical="center"
                padding="48"
                style={{
                  background: "#0A0A0A",
                  borderRadius: "var(--radius-l) var(--radius-l) 0 0",
                  height: "200px",
                  overflow: "visible",
                }}
              >
                <Logo
                  icon="/trademarks/icon-dark.svg"
                  wordmark="/trademarks/wordmark-dark.svg"
                  size="xl"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Flex>
              <Column fillWidth padding="20" gap="16">
                <Column gap="4">
                  <Text
                    variant="heading-strong-m"
                    onBackground="neutral-strong"
                  >
                    Logo Completo
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Icono + wordmark combinados, uso preferido
                  </Text>
                </Column>
                <Button
                  href="/downloads/logo-complete-dark.svg"
                  variant="secondary"
                  size="s"
                  prefixIcon="HiOutlineArrowDownTray"
                  fillWidth
                >
                  Descargar
                </Button>
              </Column>
            </Flex>
          </Grid>

          {/* Light Mode Logos */}
          <Grid fillWidth columns="3" gap="24" className="grid-3-2">
            {logoAssets.map((asset, index) => (
              <Flex
                key={`${asset.name}-light`}
                fillWidth
                radius="l"
                border="neutral-alpha-medium"
                background="surface"
                direction="column"
                padding="0"
                style={{ overflow: "visible" }}
              >
                {/* Preview area with light background */}
                <Flex
                  fillWidth
                  horizontal="center"
                  vertical="center"
                  padding="48"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "var(--radius-l) var(--radius-l) 0 0",
                    height: "200px",
                    overflow: "visible",
                  }}
                >
                  <Media
                    src={asset.previewLight}
                    alt={`${asset.name} - Claro`}
                    style={{ 
                      maxWidth: "100%", 
                      width: "200px",
                      height: "auto", 
                      objectFit: "contain",
                      display: "block"
                    }}
                    sizes="200px"
                  />
                </Flex>
                <Column fillWidth padding="20" gap="16">
                  <Column gap="4">
                    <Text
                      variant="heading-strong-m"
                      onBackground="neutral-strong"
                    >
                      {asset.name}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {asset.description}
                    </Text>
                  </Column>
                  <Button
                    href={asset.downloadLight}
                    variant="secondary"
                    size="s"
                    prefixIcon="HiOutlineArrowDownTray"
                    fillWidth
                  >
                    Descargar
                  </Button>
                </Column>
              </Flex>
            ))}

            {/* Logo with wordmark combined - Light */}
            <Flex
              fillWidth
              radius="l"
              border="neutral-alpha-medium"
              background="surface"
              direction="column"
              padding="0"
              className="logo-completo-card"
              style={{ overflow: "visible" }}
            >
              <Flex
                fillWidth
                horizontal="center"
                vertical="center"
                padding="48"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "var(--radius-l) var(--radius-l) 0 0",
                  height: "200px",
                  overflow: "visible",
                }}
              >
                <Logo
                  icon="/trademarks/icon-light.svg"
                  wordmark="/trademarks/wordmark-light.svg"
                  size="xl"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Flex>
              <Column fillWidth padding="20" gap="16">
                <Column gap="4">
                  <Text
                    variant="heading-strong-m"
                    onBackground="neutral-strong"
                  >
                    Logo Completo
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Icono + wordmark combinados, uso preferido
                  </Text>
                </Column>
                <Button
                  href="/downloads/logo-complete-light.svg"
                  variant="secondary"
                  size="s"
                  prefixIcon="HiOutlineArrowDownTray"
                  fillWidth
                >
                  Descargar
                </Button>
              </Column>
            </Flex>
          </Grid>
        </Column>
      </Column>

      {/* Usage Guidelines Section */}
      <Column
        fillWidth
        maxWidth="l"
        paddingX="l"
        paddingY="xl"
        gap="48"
        horizontal="center"
        style={{ margin: "0 auto" }}
      >
        {/* <Column
          fillWidth
          horizontal="center"
          gap="16"
          style={{ textAlign: "center" }}
        >
          <Heading variant="display-strong-s" align="center">
            Guías de Uso
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
              Para mantener la consistencia de nuestra marca, seguí estas
              recomendaciones
            </Text>
          </Column> */}

        <Grid fillWidth columns="2" gap="24" className="grid-2-1">
          {/* Do's */}
          <Flex
            fillWidth
            radius="l"
            border="neutral-alpha-medium"
            background="surface"
            padding="24"
            direction="column"
            gap="20"
          >
              <Row gap="12" vertical="center">
                <Flex
                  padding="8"
                  radius="full"
                  background="success-alpha-weak"
                  border="success-alpha-medium"
                >
                  <Icon name="check" size="s" onBackground="success-strong" />
                </Flex>
                <Heading variant="heading-strong-l">Correcto</Heading>
              </Row>
              <Column gap="12">
                <Row gap="12" vertical="start">
                  <Icon name="check" size="s" onBackground="success-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Usá el logo en su formato original sin modificaciones
                  </Text>
                </Row>
                <Row gap="12" vertical="start">
                  <Icon name="check" size="s" onBackground="success-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Mantené un espacio libre alrededor del logo
                  </Text>
                </Row>
                <Row gap="12" vertical="start">
                  <Icon name="check" size="s" onBackground="success-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Usá los colores de la paleta oficial
                  </Text>
                </Row>
                <Row gap="12" vertical="start">
                  <Icon name="check" size="s" onBackground="success-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Elegí la versión correcta según el fondo
                  </Text>
                </Row>
              </Column>
            </Flex>

          {/* Don'ts */}
          <Flex
            fillWidth
            radius="l"
            border="neutral-alpha-medium"
            background="surface"
            padding="24"
            direction="column"
            gap="20"
          >
              <Row gap="12" vertical="center">
                <Flex
                  padding="8"
                  radius="full"
                  background="danger-alpha-weak"
                  border="danger-alpha-medium"
                >
                  <Icon name="close" size="s" onBackground="danger-strong" />
                </Flex>
                <Heading variant="heading-strong-l">Incorrecto</Heading>
              </Row>
              <Column gap="12">
                <Row gap="12" vertical="start">
                  <Icon name="close" size="s" onBackground="danger-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    No distorsiones ni estires el logo
                  </Text>
                </Row>
                <Row gap="12" vertical="start">
                  <Icon name="close" size="s" onBackground="danger-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    No cambies los colores del logo
                  </Text>
                </Row>
                <Row gap="12" vertical="start">
                  <Icon name="close" size="s" onBackground="danger-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    No agregues efectos ni sombras
                  </Text>
                </Row>
                <Row gap="12" vertical="start">
                  <Icon name="close" size="s" onBackground="danger-medium" />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    No uses el logo sobre fondos que dificulten la legibilidad
                  </Text>
                </Row>
              </Column>
            </Flex>
        </Grid>
      </Column>

      {/* Contact Section */}
      <Column fillWidth style={{ background: "var(--surface)" }}>
        <Column
          fillWidth
          maxWidth="l"
          paddingX="l"
          paddingY="xl"
          horizontal="center"
          style={{ margin: "0 auto" }}
        >
          <Flex
            fillWidth
            padding="48"
            radius="xl"
            border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              direction="column"
              gap="24"
              horizontal="center"
            >
              <Icon name="HiOutlineEnvelope" size="xl" onBackground="brand-medium" />
              <Heading variant="display-strong-s" align="center">
                ¿Necesitás algo más?
              </Heading>
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                align="center"
                style={{ maxWidth: "500px" }}
              >
                Si necesitás formatos adicionales, permisos especiales o tenés
                consultas sobre el uso de nuestra marca, contactanos.
              </Text>
              <Button href="/contacto" size="l" arrowIcon>
                Contactar
              </Button>
            </Flex>
        </Column>
      </Column>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .stack-on-mobile { display: flex; }
        @media (max-width: 767px) {
          .stack-on-mobile { flex-direction: column !important; }
          .grid-2-1 { grid-template-columns: 1fr !important; }
          .grid-3-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .logo-completo-card { grid-column: 1 / -1 !important; }
        }
      `,
        }}
      />
    </Column>
  );
}
