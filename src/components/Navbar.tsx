"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from 'next/navigation';
import {
	Row,
	Column,
	Text,
	Logo,
	MegaMenu,
	MobileMegaMenu,
	IconProvider,
	Card,
	NavIcon,
	Icon,
	ToggleButton
} from "@once-ui-system/core";
import EnamelIcon from "./icons/EnamelIcon";
import OkaiIcon from "./icons/OkaiIcon";
import { CgWebsite } from "react-icons/cg";
import {
	HiOutlineBuildingStorefront,
	HiOutlineBars3BottomLeft,
	HiOutlineEnvelope,
	HiOutlineDocumentDuplicate,
	HiOutlineDocumentChartBar,
	HiOutlineShieldCheck,
	HiOutlineSquares2X2,
	HiCog8Tooth,
	HiOutlineComputerDesktop,
	HiOutlineCube,
	HiOutlineTicket,
	HiOutlineRocketLaunch,
	HiCodeBracket,
	HiOutlineSparkles,
	HiOutlineShoppingCart,
	HiOutlineVideoCamera,
	HiOutlinePaintBrush,
	HiOutlineFolder,
} from "react-icons/hi2";

export type MenuGroup = any;

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH: Define all menu data here once.
// Both desktop and mobile menus are derived from this array.
// ─────────────────────────────────────────────────────────────────────────────
export const menuData: MenuGroup[] = [
	{
		id: "products",
		label: "Productos",
		suffixIcon: "chevronDown",
		sections: [
			{
				title: "Servicios",
				links: [
					{
						label: "Enamel",
						href: "/analytics",
						icon: "EnamelIcon",
						description: "Gestión integral de clínicas odontológicas",
					},
					{
						label: "Okai",
						href: "/security",
						icon: "OkaiIcon",
						description: "Alerta temprana de incendios forestales con IA",
					},
				],
			},
		],
	},
	{
		id: "solutions",
		label: "Soluciones",
		suffixIcon: "chevronDown",
		// For desktop we need custom layout; we'll generate `content` from `sections` below.
		// desktopColumns defines how sections are grouped into columns for desktop view.
		desktopColumns: [
			["Desarrollo Web", "Desarrollo de Software"],
			["Diseño Gráfico"], 
		],
		sections: [
			{
				title: "Desarrollo Web",
				links: [
					{
						label: "Páginas Web",
						href: "/paginas-web",
						icon: "CgWebsite",
						description: "Sitios modernos y responsivos",
					},
					{
						label: "E-Commerce",
						href: "/e-commerce",
						icon: "HiOutlineShoppingCart",
						description: "Tiendas online que convierten",
					},
					{
						label: "Landing Pages",
						href: "/landing-pages",
						icon: "HiOutlineRocketLaunch",
						description: "Páginas optimizadas para conversión",
					},
				],
			},
			{
				title: "Desarrollo de Software",
				links: [
					{
						label: "Software a Medida",
						href: "/software-a-medida",
						icon: "HiCodeBracket",
						description: "Aplicaciones según tus necesidades",
					},
					{
						label: "Desarrollo Low-Code",
						href: "/low-code",
						icon: "HiOutlineCube",
						description: "Soluciones ágiles y escalables",
					},
				],
			},
			{
				title: "Diseño Gráfico",
				links: [
					{
						label: "Identidad de Marca",
						href: "/identidad-de-marca",
						icon: "HiOutlinePaintBrush",
						description: "Logos y branding profesional",
					},
					{
						label: "Diseño para Redes",
						href: "/diseno-para-redes-sociales",
						icon: "HiOutlineSparkles",
						description: "Contenido visual que destaca",
					},
					{
						label: "Edición de Video",
						href: "/edicion-de-video",
						icon: "HiOutlineVideoCamera",
						description: "Videos profesionales y creativos",
					},
				],
			},
		],
	},
	,
	{
		id: "case-studies",
		label: "Casos de éxito",
		href: "/casos-de-exito",
	},
	{
		id: "us",
		label: "Compañía",
		suffixIcon: "chevronDown",
		sections: [
			{
				title: "Sobre nosotros",
				links: [
					{
						label: "Nuestra historia",
						href: "/nosotros",
						icon: "HiOutlineDocumentDuplicate",
						description: "Conocenos",
					},
					{
						label: "Blog",
						href: "/blog",
						icon: "HiOutlineBars3BottomLeft",
						description: "Últimas novedades y noticias",
					},
				],
			},
			{
				title: "Conectar",
				links: [
					{
						label: "Carreras",
						href: "/carreras",
						icon: "HiOutlineRocketLaunch",
						description: "Trabajá con nosotros",
					},
					{
						label: "Kit de Medios",
						href: "/kit-de-medios",
						icon: "HiOutlineFolder",
						description: "Recursos para prensa",
					},
				],
			},
		],
	},
	{
		id: "contact",
		label: "Contacto",
		href: "/contacto",
	},
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper: build JSX content for a desktop mega-menu with custom column layout
// ─────────────────────────────────────────────────────────────────────────────
function buildDesktopContent(
	sections: { title: string; links: { label: string; href: string; icon: string; description: string }[] }[],
	columns: string[][] // each sub-array lists section titles that go in that column
): React.ReactNode {
	return (
		<Row gap="16">
			{columns.map((colTitles, colIdx) => (
				<Column key={colIdx} minWidth={12} gap="4">
					{colTitles.map((title, secIdx) => {
						const section = sections.find((s) => s.title === title);
						if (!section) return null;
						return (
							<React.Fragment key={title}>
								<Text
									marginLeft="8"
									marginBottom="12"
									marginTop={secIdx === 0 ? "12" : "24"}
									onBackground="neutral-weak"
									variant="label-default-s"
								>
									{section.title}
								</Text>
								{section.links.map((link) => (
									<ToggleButton
										key={link.href}
										style={{
											height: "auto",
											minHeight: "fit-content",
											paddingLeft: "var(--static-space-0)",
											paddingTop: "var(--static-space-4)",
											paddingBottom: "var(--static-space-4)",
											paddingRight: "var(--static-space-12)",
										}}
										fillWidth
										horizontal="start"
										href={link.href}
									>
										<Row gap="12">
											<Icon name={link.icon} size="s" padding="8" radius="s" border="neutral-alpha-weak" />
											<Column gap="4">
												<Text onBackground="neutral-strong" variant="label-strong-s">
													{link.label}
												</Text>
												<Text onBackground="neutral-weak" truncate>
													{link.description}
												</Text>
											</Column>
										</Row>
									</ToggleButton>
								))}
							</React.Fragment>
						);
					})}
				</Column>
			))}
		</Row>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Navbar Component
// ─────────────────────────────────────────────────────────────────────────────
export default function Navbar({
	brand = "αCentauri",
	menuGroups
}: {
	brand?: string;
	menuGroups?: MenuGroup[];
}) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [cardHeight, setCardHeight] = useState(0);

	// Close mobile menu when the route changes (handles navigation via links)
	useEffect(() => {
		if (mobileOpen) setMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!cardRef.current) return;
		const update = () => setCardHeight(cardRef.current?.getBoundingClientRect().height || 0);
		update();
		const ro = new ResizeObserver(() => update());
		ro.observe(cardRef.current);
		return () => ro.disconnect();
	}, []);

	// Update a CSS variable so layouts/pages can respect the fixed navbar height
	useEffect(() => {
		if (cardHeight > 0) {
			try {
				document.documentElement.style.setProperty('--navbar-height', `${cardHeight}px`);
			} catch (e) {
				// ignore in non-browser environments
			}
		}
		return () => {
			try { document.documentElement.style.removeProperty('--navbar-height'); } catch (e) {}
		};
	}, [cardHeight]);

	// Build desktop menu groups (with JSX content where needed)
	const desktopMenuGroups: MenuGroup[] = useMemo(() => {
		const source = menuGroups ?? menuData;
		return source.map((group) => {
			// Generate content JSX from sections + column layout when provided
			const base = group.desktopColumns && group.sections
				? {
					...group,
					content: buildDesktopContent(group.sections, group.desktopColumns),
				}
				: { ...group };

			// Ensure dropdown parents do not stay highlighted when a child page is active
			if (group.sections) {
				base.selected = false;
			}

			// For the case studies and contact top-level buttons, do not keep them highlighted
			if (group.id === "case-studies" || group.id === "contact") {
				base.selected = false;
			}

			return base;
		});
	}, [menuGroups]);

	// Mobile uses sections directly (no custom JSX content)
	const mobileMenuGroups: MenuGroup[] = useMemo(() => {
		const source = menuGroups ?? menuData;
		return source.map((group) => {
			// Remove content prop so MobileMegaMenu uses sections
			const { content, desktopColumns, ...rest } = group;
			// Add onClick handlers to close menu when links are clicked
			if (rest.sections) {
				rest.sections = rest.sections.map((section: any) => ({
					...section,
					links: section.links?.map((link: any) => ({
						...link,
						onClick: () => setMobileOpen(false)
					}))
				}));
			}
			// Prevent mobile menu from marking certain groups as selected
			if (rest.sections) {
				rest.selected = false;
			}
			if (rest.id === "case-studies" || rest.id === "contact") {
				rest.selected = false;
			}
			return rest;
		});
	}, [menuGroups]);

		return (
			<>
			<style dangerouslySetInnerHTML={{ __html: `
				.nav-root{max-width:1200px;margin:0 auto;position:relative;display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:8px 16px;border-radius:8px}
				.nav-left{display:flex;align-items:center;gap:12px;justify-content:flex-start}
				.nav-center{display:flex;justify-content:center}
				.nav-right{display:flex;justify-content:flex-end}
				.desktop-only{display:none}
				.mobile-only{display:flex}
				.nav-card{background:#0a0a0a !important;}
				.nav-card{box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2) !important;}
				.nav-card:hover{transform:none !important;}
				.nav-card{border-bottom: 1px solid rgba(255,255,255,0.1) !important;}
				@media(min-width:768px){
					.desktop-only{display:flex}
					.mobile-only{display:none}
				}
				@media(max-width:767px){
					.nav-root{display:flex !important; justify-content:space-between; max-width:none; width:100%;}
				}
			` }} />
			<header>
				<Card ref={cardRef} fillWidth background="surface" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 2147483647, border: "none" }} padding="4" className="nav-card">
				<div className="nav-root">
					<div className="nav-left">
						<Logo icon="/trademarks/icon-dark.svg" wordmark="/trademarks/wordmark-dark.svg" size="m" href="/" />
					</div>

					<div className="nav-center desktop-only">
						<IconProvider icons={{
							HiOutlineDocumentChartBar,
							HiOutlineShieldCheck,
							HiOutlineSquares2X2,
							HiCog8Tooth,
							HiOutlineCube,
							HiOutlineTicket,
							HiOutlineComputerDesktop,
							HiOutlineRocketLaunch,
							HiCodeBracket,
							HiOutlineSparkles,
							HiOutlineDocumentDuplicate,
							HiOutlineEnvelope,
							HiOutlineBars3BottomLeft,
							HiOutlineVideoCamera,
							HiOutlinePaintBrush,
							EnamelIcon: EnamelIcon,
							OkaiIcon: OkaiIcon,
							HiOutlineBuildingStorefront,
							CgWebsite,
							HiOutlineShoppingCart,
							HiOutlineFolder
							}}>
							<MegaMenu menuGroups={desktopMenuGroups} />
						</IconProvider>
					</div>

					<div className="nav-right">
						<div className="mobile-only">
							<NavIcon isActive={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
						</div>
					</div>
				</div>
				</Card>

				{mobileOpen && (
					<Card fillWidth background="surface" style={{ position: "fixed", top: (cardHeight + 10) + 'px', left: 0, width: "100vw", height: `calc(100vh - ${cardHeight + 10}px)`, zIndex: 2147483646, border: "none", paddingTop: '50px' }} padding="0" className="nav-card">
						<IconProvider icons={{
							HiOutlineDocumentChartBar,
							HiOutlineShieldCheck,
							HiOutlineSquares2X2,
							HiCog8Tooth,
							HiOutlineCube,
							HiOutlineTicket,
                            HiOutlineComputerDesktop,
                            HiOutlineRocketLaunch,
                            HiCodeBracket,
                            HiOutlineSparkles,
                            HiOutlineDocumentDuplicate,
                            HiOutlineEnvelope,
                            HiOutlineBars3BottomLeft,
                            HiOutlineVideoCamera,
                            HiOutlinePaintBrush,
							EnamelIcon: EnamelIcon,
                            OkaiIcon: OkaiIcon,
							HiOutlineBuildingStorefront,
							CgWebsite,
							HiOutlineShoppingCart,
							HiOutlineFolder
							}}>
							<MobileMegaMenu menuGroups={mobileMenuGroups} onClose={() => setMobileOpen(false)} />
						</IconProvider>
					</Card>
				)}
			</header>

			{/* spacer to avoid content being hidden under the fixed navbar */}
			<div style={{ height: cardHeight }} />
		</>
	);
}
