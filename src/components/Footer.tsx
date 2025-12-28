"use client";

import React from "react";
import {
	Row,
	Column,
	Text,
	Logo,
	Line,
	Card,
	Button,
} from "@once-ui-system/core";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<footer style={{ background: '#151515', padding: 'var(--responsive-space-l)', borderTop: '1px solid var(--neutral-alpha-weak)', position: 'relative', zIndex: 10 }}>
			<Column fillWidth gap="l" style={{ maxWidth: '1200px', margin: '0 auto' }}>
				{/* Top row with logo and links */}
				<Row fillWidth horizontal="between" vertical="center">
					<Column gap="4" vertical="center" horizontal="center">
						<Logo icon="/trademarks/icon-dark.svg" size="xl" href="/" style={{ transform: 'scale(1.2)' }} />
						<Logo wordmark="/trademarks/wordmark-dark.svg" size="m" href="/" />
					</Column>
					<Row gap="8">
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
							<FaInstagram size={20} />
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
							<FaYoutube size={20} />
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
							<FaGithub size={20} />
						</Button>
					</Row>
				</Row>

				{/* Megamenu pages replicated from Navbar */}
				<Column fillWidth gap="xl" m={{ direction: "column" }}>
					<Row fillWidth gap="xl">
						<Column gap="m" flex="1">
							<Text variant="heading-strong-s">Productos</Text>
							<Column gap="4" as="ul" style={{ listStyle: 'none', padding: 0 }}>
								<li><a href="/analytics"><Text variant="body-default-s">Enamel</Text></a></li>
								<li><a href="/security"><Text variant="body-default-s">Okai</Text></a></li>
							</Column>
						</Column>
						<Column gap="m" flex="1">
							<Text variant="heading-strong-s">Soluciones</Text>
							<Column gap="4" as="ul" style={{ listStyle: 'none', padding: 0 }}>
								<li><a href="/paginas-web"><Text variant="body-default-s">Páginas Web</Text></a></li>
								<li><a href="/e-commerce"><Text variant="body-default-s">E-Commerce</Text></a></li>
								<li><a href="/landing-pages"><Text variant="body-default-s">Landing Pages</Text></a></li>
								<li><a href="/software-a-medida"><Text variant="body-default-s">Software a Medida</Text></a></li>
								<li><a href="/low-code"><Text variant="body-default-s">Desarrollo Low-Code</Text></a></li>
								<li><a href="/identidad-de-marca"><Text variant="body-default-s">Identidad de Marca</Text></a></li>
								<li><a href="/diseno-para-redes-sociales"><Text variant="body-default-s">Diseño para Redes</Text></a></li>
								<li><a href="/edicion-de-video"><Text variant="body-default-s">Edición de Video</Text></a></li>
							</Column>
						</Column>
					</Row>
					<Row fillWidth gap="xl">
						<Column gap="m" flex="1">
							<Text variant="heading-strong-s">Recursos</Text>
							<Column gap="4" as="ul" style={{ listStyle: 'none', padding: 0 }}>
								<li><a href="/guides"><Text variant="body-default-s">Guías</Text></a></li>
								<li><a href="/api"><Text variant="body-default-s">Referencia de API</Text></a></li>
							</Column>
						</Column>
						<Column gap="m" flex="1">
							<Text variant="heading-strong-s">Compañía</Text>
							<Column gap="4" as="ul" style={{ listStyle: 'none', padding: 0 }}>
								<li><a href="/nosotros"><Text variant="body-default-s">Nuestra historia</Text></a></li>
								<li><a href="/carreras"><Text variant="body-default-s">Carreras</Text></a></li>
								<li><a href="/kit-de-medios"><Text variant="body-default-s">Kit de Medios</Text></a></li>
								<li><a href="/blog"><Text variant="body-default-s">Blog</Text></a></li>
								<li><a href="/contacto"><Text variant="body-default-s">Contacto</Text></a></li>
							</Column>
						</Column>
					</Row>
				</Column>
				{/* Divider and copyright */}
				<Row fillWidth horizontal="center">
					<Column style={{ width: '100%' }}>
						<Line background="neutral-alpha-weak" />
						<Row fillWidth horizontal="center" vertical="center" style={{ paddingTop: 'var(--responsive-space-s)' }}>
							<Text variant="body-default-s" onBackground="neutral-weak">{new Date().getFullYear()} αCentauri. Todos los derechos reservados.</Text>
						</Row>
					</Column>
				</Row>			
			</Column>
		</footer>
	);
}