"use client";

import { Column, Card, Heading, Text, Flex, Button } from "@once-ui-system/core";
import { FaMapMarkerAlt, FaShareAlt, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactInfoCard() {
  return (
    <Card
      className="contact-card contact-info-card"
      fillHeight
      padding="m"
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      style={{
        boxShadow: 'none',
        transform: 'none',
        transition: 'none',
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      suppressHydrationWarning
    >
        <Column gap="m" fillWidth fillHeight>
          <Heading variant="heading-strong-xl" marginBottom="8" style={{ textAlign: 'center' }}>
            Información de contacto
          </Heading>

          <Flex gap="8" style={{ alignItems: 'flex-start' }}>
            <FaShareAlt style={{ minWidth: 40, marginTop: 19, height: 30 }} />
            <Column gap="4">
              <Text variant="body-strong-m">Visitá nuestras redes sociales</Text>
              <Flex gap="8">
                <Button
                  variant="secondary"
                  href="https://instagram.com/acentauripy"
                  target="_blank"
                  style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaInstagram size={24} />
                </Button>
                <Button
                  variant="secondary"
                  href="https://youtube.com/@acentauripy"
                  target="_blank"
                  style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaYoutube size={24} />
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/acentauripy"
                  target="_blank"
                  style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaGithub size={24} />
                </Button>
              </Flex>
            </Column>
          </Flex>

          <Flex gap="8" style={{ alignItems: 'flex-start' }}>
            <FaMapMarkerAlt style={{ minWidth: 40, marginTop: 8, height: 30}} />
            <Column gap="4">
              <Text variant="body-strong-m">Encontranos acá</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">Fernando de la Mora, Paraguay</Text>
            </Column>
          </Flex>

          <div style={{ width: '100%', height: 290, borderRadius: 8, overflow: 'hidden' }}>
            <iframe
              src="https://maps.google.com/maps?q=Fernando%20de%20la%20Mora,%20Paraguay&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de αCentauri en Fernando de la Mora, Paraguay"
            ></iframe>
          </div>

          {/* Commented out email and phone sections for future use */}
          {/*
          <Flex gap="8" style={{ alignItems: 'flex-start' }}>
            <FaEnvelope style={{ minWidth: 20, marginTop: 4 }} />
            <Column gap="4">
              <Text variant="body-strong-s">Email</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <a href="mailto:acentauripy@gmail.com">acentauripy@gmail.com</a>
              </Text>
            </Column>
          </Flex>

          <Flex gap="8" style={{ alignItems: 'flex-start' }}>
            <FaPhone style={{ minWidth: 20, marginTop: 4 }} />
            <Column gap="4">
              <Text variant="body-strong-s">Teléfono</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">+595 XXX XXX XXX</Text>
            </Column>
          </Flex>
          */}
        </Column>
      </Card>
  );
}