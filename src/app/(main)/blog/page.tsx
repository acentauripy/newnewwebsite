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
  Avatar,
  Card,
  Scroller,
  Icon,
  IconButton,
  Input,
  Background,
  SmartLink,
} from "@once-ui-system/core";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["Todos"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog/posts')
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data.posts);
        setCategories(data.categories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // Pagination logic
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Get posts for current page
  let featuredPost = null;
  let horizontalPosts: any[] = [];
  let gridPosts: any[] = [];

  if (currentPage === 1) {
    // Page 1: Featured + 2 horizontal + 3 grid (total 6)
    featuredPost = filteredPosts[0];
    horizontalPosts = filteredPosts.slice(1, 3);
    gridPosts = filteredPosts.slice(3, 6);
  } else {
    // Page 2+: Just 6 grid posts
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    gridPosts = filteredPosts.slice(startIndex, endIndex);
  }

  if (loading) {
    return (
      <Column fillWidth horizontal="center" paddingTop="xl" paddingY="l">
        <Text>Cargando...</Text>
      </Column>
    );
  }

  return (
    <Column fillWidth horizontal="center" paddingTop="xl" paddingY="l">
      <Column
        fillWidth
        maxWidth="s"
        gap="24"
        paddingX="16"
      >
        {/* Page Title */}
        <Heading
          variant="display-strong-xs"
          onBackground="neutral-strong"
          marginLeft="16"
        >
          Blog
        </Heading>

        {/* Category Filter Scroller */}
        <Scroller>
          <Row gap="8" paddingX="16">
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
        </Scroller>

        {/* Featured Post - Big Card */}
        {featuredPost && (
          <SmartLink href={`/blog/${featuredPost.slug}`} fillWidth unstyled>
            <Card
              fillWidth
              radius="l"
              direction="column"
            >
              <Flex
                fillWidth
                radius="l"
                border="neutral-alpha-weak"
                overflow="hidden"
                style={{ aspectRatio: "16 / 9" }}
              >
                <Media
                  src={featuredPost.image!}
                  alt={`Thumbnail de ${featuredPost.title}`}
                  aspectRatio="16/9"
                  sizes="640px"
                />
              </Flex>
              <Column fillWidth padding="32" gap="16">
                <Text
                  variant="label-strong-s"
                  onBackground="neutral-weak"
                >
                  Destacado
                </Text>
                <Heading
                  variant="heading-strong-l"
                  onBackground="neutral-strong"
                  wrap="balance"
                >
                  {featuredPost.title}
                </Heading>
                <Row gap="12" vertical="center">
                  <Avatar
                    size="s"
                    src={featuredPost.authorAvatar}
                  />
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {featuredPost.author}
                  </Text>
                </Row>
              </Column>
            </Card>
          </SmartLink>
        )}

        {/* Secondary Cards - Horizontal layout with image on left */}
        {horizontalPosts.map((post) => (
          <SmartLink key={post.slug} href={`/blog/${post.slug}`} fillWidth unstyled>
            <Card fillWidth radius="l">
              <Row fillWidth gap="0">
                {/* Image on left - 2/5 width */}
                {post.image && (
                  <Flex
                    flex={2}
                    radius="l"
                    border="neutral-alpha-weak"
                    overflow="hidden"
                    style={{ aspectRatio: "16 / 9", width: "40%" }}
                  >
                    <Media
                      src={post.image}
                      alt={`Thumbnail de ${post.title}`}
                      aspectRatio="16/9"
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </Flex>
                )}
                {/* Content on right - 3/5 width */}
                <Column flex={3} padding="32" gap="16">
                  <Text
                    variant="label-strong-s"
                    onBackground="neutral-weak"
                    paddingX="8"
                    paddingY="4"
                    style={{ 
                      display: "inline-block", 
                      width: "fit-content",
                      border: "2px solid var(--neutral-alpha-weak)",
                      borderRadius: "var(--radius-s)"
                    }}
                  >
                    {post.category}
                  </Text>
                  <Heading
                    variant="heading-strong-l"
                    onBackground="neutral-strong"
                    wrap="balance"
                  >
                    {post.title}
                  </Heading>
                  <Row gap="12" vertical="center">
                    <Avatar
                      size="s"
                      src={post.authorAvatar}
                    />
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {post.author}
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Card>
          </SmartLink>
        ))}

        {/* Grid of Text-Only Posts */}
        {gridPosts.length > 0 && (
          <Grid fillWidth columns="2" gap="8" className="blog-grid">
            {gridPosts.map((post) => (
              <SmartLink key={post.slug} href={`/blog/${post.slug}`} fillWidth unstyled>
                <Card
                  fillWidth
                  radius="l"
                >
                  <Column fillWidth padding="32" gap="16">
                    <Text
                      variant="label-strong-s"
                      onBackground="neutral-weak"
                      paddingX="8"
                      paddingY="4"
                      style={{ 
                        display: "inline-block", 
                        width: "fit-content",
                        border: "2px solid var(--neutral-alpha-weak)",
                        borderRadius: "var(--radius-s)"
                      }}
                    >
                      {post.category}
                    </Text>
                    <Heading
                      variant="heading-strong-l"
                      onBackground="neutral-strong"
                      wrap="balance"
                    >
                      {post.title}
                    </Heading>
                    <Row gap="12" vertical="center">
                      <Avatar
                        size="s"
                        src={post.authorAvatar}
                      />
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        {post.author}
                      </Text>
                    </Row>
                  </Column>
                </Card>
              </SmartLink>
            ))}
          </Grid>
        )}

        {/* Pagination */}
        <Row fillWidth horizontal="center" gap="8" paddingBottom="l" vertical="center">
          <IconButton
            icon="chevronLeft"
            variant="tertiary"
            size="m"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            tooltip="Anterior"
            style={{ 
              background: 'transparent',
              border: 'none'
            }}
          />
          <Row gap="8" paddingX="8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "pagination-btn active" : "pagination-btn"}
                  style={{ 
                    width: '32px',
                    height: '32px',
                    minWidth: '32px',
                    minHeight: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--neutral-alpha-weak)',
                    background: currentPage === page ? 'var(--static-white)' : 'transparent',
                    color: currentPage === page ? 'var(--static-black)' : 'var(--neutral-on-background-strong)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    margin: '0',
                    fontSize: '13px',
                    fontWeight: '500',
                    lineHeight: '1',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== page) {
                      e.currentTarget.style.background = 'var(--neutral-alpha-weak)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== page) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {page}
                </button>
              ))}
            </Row>
            <IconButton
              icon="chevronRight"
              variant="tertiary"
              size="m"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              tooltip="Siguiente"
              style={{ 
                background: 'transparent',
                border: 'none'
              }}
            />
          </Row>

        {/* Newsletter Section */}
        <Column
          fillWidth
          radius="l"
          padding="xl"
          gap="12"
          horizontal="center"
          overflow="hidden"
          border="neutral-alpha-weak"
          background="surface"
          shadow="xl"
          style={{ textAlign: "center", position: "relative" }}
        >
          {/* Background Effects */}
          <Background
            fill
            position="absolute"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            mask={{
              x: 100,
              y: 50,
              radius: 150,
            }}
            gradient={{
              display: true,
              opacity: 100,
              x: 62.5,
              y: 42.5,
              width: 25,
              height: 12.5,
              tilt: -5,
              colorStart: "danger-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            fill
            position="absolute"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            gradient={{
              display: true,
              opacity: 100,
              x: 50,
              y: 37.5,
              width: 18.75,
              height: 12.5,
              tilt: 0,
              colorStart: "brand-background-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            fill
            position="absolute"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            mask={{
              x: 0,
              y: 50,
              radius: 150,
            }}
            gradient={{
              display: true,
              opacity: 100,
              x: 43.75,
              y: 37.5,
              width: 25,
              height: 12.5,
              tilt: -30,
              colorStart: "accent-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            fill
            position="absolute"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            mask={{
              x: 50,
              y: 50,
              radius: 100,
            }}
            dots={{
              display: true,
              opacity: 100,
              size: "2",
              color: "page-background",
            }}
          />

          {/* Newsletter Content */}
          <Column gap="12" horizontal="center" fillWidth maxWidth="xs" style={{ zIndex: 1 }}>
            {/* Logo - shows wordmark-dark in dark mode, wordmark-light in light mode */}
            <Media
              dark
              src="/trademarks/wordmark-dark.svg"
              alt="Logo"
              style={{ height: "var(--static-space-40)", width: "auto" }}
            />
            <Media
              light
              src="/trademarks/wordmark-light.svg"
              alt="Logo"
              style={{ height: "var(--static-space-40)", width: "auto" }}
            />

            <Heading
              variant="display-strong-xs"
              onBackground="neutral-strong"
              marginTop="12"
              wrap="balance"
            >
              Construyendo el futuro juntos
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              marginBottom="l"
              wrap="balance"
            >
              Sé el primero en conocer nuevas publicaciones y actualizaciones
            </Text>
          </Column>

          {/* Newsletter Form */}
          <Row
            gap="8"
            horizontal="center"
            vertical="center"
            fillWidth
            className="newsletter-form-row"
            style={{ zIndex: 1 }}
          >
            <Flex fillWidth style={{ maxWidth: "20rem" }}>
              <Input
                id="newsletter-email"
                placeholder="Email"
                type="email"
              />
            </Flex>
            <Button size="m" arrowIcon>
              Suscribirse
            </Button>
          </Row>
        </Column>

        {/* Mobile responsive styles */}
        <style>{`
          @media (max-width: 767px) {
            .blog-grid {
              grid-template-columns: 1fr !important;
            }
            .newsletter-form-row {
              flex-direction: column !important;
            }
            .s-paddingX-16 {
              padding-left: var(--static-space-16) !important;
              padding-right: var(--static-space-16) !important;
            }
          }
        `}</style>
      </Column>
    </Column>
  );
}
