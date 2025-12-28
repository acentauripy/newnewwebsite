"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
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
  SmartLink,
  Button,
  Icon,
} from "@once-ui-system/core";

interface BlogPostData {
  title: string;
  publishedAt: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  summary: string;
  content: string;
}

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    // Fetch the blog post
    fetch(`/api/blog/post/${slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data.post);
        setRelatedPosts(data.relatedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Column fillWidth paddingTop="xl" paddingY="l" gap="64" horizontal="center">
        <Text>Loading...</Text>
      </Column>
    );
  }

  if (!post) {
    return (
      <Column fillWidth paddingTop="xl" paddingY="l" gap="64" horizontal="center">
        <Text>Post not found</Text>
      </Column>
    );
  }

  return (
    <Column fillWidth paddingTop="xl" paddingY="l" gap="64">
      {/* Back Button */}
      <Row 
        fillWidth 
        horizontal="center"
      >
        <Row
          fillWidth
          horizontal="start"
          style={{ maxWidth: "var(--responsive-width-m)" }}
        >
          <Button
            href="/blog"
            variant="secondary"
            size="s"
            style={{ 
              width: "fit-content", 
              borderWidth: "2px"
            }}
          >
            <Icon name="chevronLeft" size="xs" />
            Volver al blog
          </Button>
        </Row>
      </Row>

      {/* Header */}
      <Column
        fillWidth
        horizontal="center"
        gap="24"
        className="blog-section-mobile-padding"
        style={{ maxWidth: "var(--responsive-width-s)", textAlign: "center", margin: "0 auto" }}
      >
        <Heading as="h1" variant="display-strong-l" onBackground="neutral-strong" wrap="balance">
          {post.title}
        </Heading>
        <Row gap="12" horizontal="center" vertical="center">
          <Avatar size="s" src={post.authorAvatar} />
          <Text variant="label-default-s" onBackground="neutral-weak">
            {post.author}
          </Text>
        </Row>
      </Column>

      {/* Cover Image */}
      <Flex
        fillWidth
        horizontal="center"
        className="blog-section-mobile-padding"
        style={{ maxWidth: "var(--responsive-width-m)", margin: "0 auto" }}
      >
        <Media
          src={post.image}
          alt={`Cover of ${post.title}`}
          aspectRatio="16/9"
          sizes="(max-width: 768px) 100vw, 720px"
          radius="xl"
          border="neutral-alpha-weak"
        />
      </Flex>

      {/* Content */}
      <Column
        fillWidth
        horizontal="center"
        gap="40"
        className="blog-body-mobile-padding"
        style={{ maxWidth: "var(--responsive-width-xs)", margin: "0 auto" }}
      >
        <ReactMarkdown
          components={{
            h1: ({ children, ...props }) => (
              <Heading as="h1" variant="heading-strong-l" marginTop="24" marginBottom="16">
                {children}
              </Heading>
            ),
            h2: ({ children, ...props }) => (
              <Heading as="h2" variant="heading-strong-m" marginTop="24" marginBottom="16">
                {children}
              </Heading>
            ),
            h3: ({ children, ...props }) => (
              <Heading as="h3" variant="heading-strong-s" marginTop="20" marginBottom="12">
                {children}
              </Heading>
            ),
            p: ({ children }) => (
              <Text variant="body-default-m" onBackground="neutral-medium" marginBottom="16">
                {children}
              </Text>
            ),
            img: ({ src, alt }) => (
              <Media
                src={src || ''}
                alt={alt || ''}
                aspectRatio="16/9"
                sizes="(max-width: 768px) 100vw, 600px"
                radius="l"
                border="neutral-alpha-weak"
                fillWidth
                marginY="24"
              />
            ),
            ul: ({ children }) => (
              <Column as="ul" gap="8" paddingLeft="24" marginBottom="16">
                {children}
              </Column>
            ),
            ol: ({ children }) => (
              <Column as="ol" gap="8" paddingLeft="24" marginBottom="16">
                {children}
              </Column>
            ),
            li: ({ children }) => (
              <Text as="li" variant="body-default-m" onBackground="neutral-medium">
                {children}
              </Text>
            ),
            strong: ({ children }) => (
              <Text as="strong" weight="strong">
                {children}
              </Text>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </Column>

      {/* Related Posts */}
      <Column
        fillWidth
        gap="24"
        marginTop="64"
        className="blog-section-mobile-padding"
        style={{ maxWidth: "var(--responsive-width-s)", margin: "0 auto" }}
      >
        <Heading
          variant="heading-strong-xl"
          onBackground="neutral-strong"
          marginLeft="32"
        >
          Related posts
        </Heading>
        <Grid fillWidth columns="2" gap="8" className="blog-grid">
          {relatedPosts.map((relatedPost) => (
            <SmartLink key={relatedPost.id} href={`/blog/${relatedPost.slug}`} fillWidth unstyled>
              <Card fillWidth radius="l">
                <Column fillWidth direction="column">
                  {relatedPost.image && (
                    <Flex
                      fillWidth
                      radius="l"
                      border="neutral-alpha-weak"
                      overflow="hidden"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <Media
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        aspectRatio="16/9"
                        sizes="100vw"
                        objectFit="cover"
                      />
                    </Flex>
                  )}
                  <Column fillWidth paddingX="24" paddingY="20" gap="16">
                    <Text variant="label-strong-s" onBackground="neutral-weak">
                      {relatedPost.category}
                    </Text>
                    <Heading
                      variant="heading-strong-s"
                      onBackground="neutral-strong"
                      wrap="balance"
                    >
                      {relatedPost.title}
                    </Heading>
                    <Row gap="12" vertical="center">
                      <Avatar size="s" src={relatedPost.authorAvatar} />
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        {relatedPost.author}
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Card>
            </SmartLink>
          ))}
        </Grid>
      </Column>

      <style jsx>{`
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Column>
  );
};

export default BlogPost;
