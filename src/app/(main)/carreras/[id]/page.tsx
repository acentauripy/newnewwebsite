"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import {
  Column,
  Row,
  Text,
  Heading,
  Icon,
  Button,
  Grid,
  Input,
  Textarea,
  Feedback,
} from "@once-ui-system/core";
import { jobDetails } from "@/resources/content";
import { JobOpening } from "jobs";

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  
  const job = jobDetails.find((j) => j.id === jobId);
  
  // Scroll to top when job changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!job) {
    notFound();
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", portfolio: "", coverLetter: "" });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <Column fillWidth center>
      <Column
        fillWidth
        center
        padding="l"
        gap="64"
        marginTop="64"
        style={{ maxWidth: "var(--responsive-width-l)" }}
      >
        <Row
          fillWidth
          gap="xl"
          className="job-detail-row"
          style={{ flexDirection: "row" }}
        >
          {/* Left Column - Job Details */}
          <Column gap="32" fillWidth style={{ flex: 1 }}>
            {/* Back Button */}
            <Column gap="16" fillWidth>
              <Button
                href="/carreras"
                variant="secondary"
                size="s"
                style={{ 
                  width: "fit-content", 
                  borderWidth: "2px",
                  display: "none"
                }}
                className="back-button-mobile"
              >
                <Icon name="chevronLeft" size="xs" />
                Volver a posiciones
              </Button>

              {/* Job Title and Meta */}
              <Column gap="16" fillWidth>
                <Heading
                  as="h1"
                  variant="display-strong-s"
                  marginTop="8"
                  style={{ textWrap: "balance" }}
                >
                  {job.title}
                </Heading>

                {/* Job Meta Grid */}
                <Grid columns="2" gap="12" fillWidth>
                  <Row gap="8" vertical="center">
                    <Icon name="mapPin" size="s" onBackground="neutral-weak" />
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {job.location}
                    </Text>
                  </Row>
                  <Row gap="8" vertical="center">
                    <Icon name="clock" size="s" onBackground="neutral-weak" />
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {job.type}
                    </Text>
                  </Row>
                  <Row gap="8" vertical="center">
                    <Icon name="briefcase" size="s" onBackground="neutral-weak" />
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {job.area}
                    </Text>
                  </Row>
                  <Row gap="8" vertical="center">
                    <Icon name="currency" size="s" onBackground="neutral-weak" />
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {job.salaryRange}
                    </Text>
                  </Row>
                </Grid>
              </Column>
            </Column>

            {/* Job Description */}
            <Text variant="body-default-l" onBackground="neutral-medium">
              {job.description}
            </Text>

            {/* Responsibilities */}
            <Column gap="16" fillWidth>
              <Heading as="h2" variant="heading-strong-l" style={{ textWrap: "balance" }}>
                Responsabilidades
              </Heading>
              <Column gap="8">
                {job.responsibilities.map((item, index) => (
                  <Row key={index} gap="12" vertical="center">
                    <Icon name="check" size="s" onBackground="brand-weak" />
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {item}
                    </Text>
                  </Row>
                ))}
              </Column>
            </Column>

            {/* Requirements */}
            <Column gap="16" fillWidth>
              <Heading as="h2" variant="heading-strong-l" style={{ textWrap: "balance" }}>
                Requisitos
              </Heading>
              <Column gap="8">
                {job.requirements.map((item, index) => (
                  <Row key={index} gap="12" vertical="center">
                    <Icon name="check" size="s" onBackground="brand-weak" />
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {item}
                    </Text>
                  </Row>
                ))}
              </Column>
            </Column>
          </Column>

          {/* Right Column - Application Form */}
          <Column
            fillWidth
            padding="l"
            gap="32"
            background="overlay"
            border="neutral-alpha-weak"
            radius="l"
            style={{ flex: 1 }}
          >
              {/* Form Header */}
              <Column gap="8" fillWidth>
                <Heading as="h2" variant="heading-strong-l" style={{ textWrap: "balance" }}>
                  Postulate a esta posicion
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </Text>
              </Column>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Column gap="12" fillWidth>
                  <Input
                    id="job-form-name"
                    label="Nombre completo"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                  <Input
                    id="job-form-email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                  <Input
                    id="job-form-portfolio"
                    label="URL de Portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleChange("portfolio", e.target.value)}
                  />
                  <Textarea
                    id="job-form-cover-letter"
                    label="Carta de presentacion"
                    value={formData.coverLetter}
                    onChange={(e) => handleChange("coverLetter", e.target.value)}
                    lines={4}
                    resize="vertical"
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    fillWidth
                    disabled={isSubmitting}
                    arrowIcon
                  >
                    {isSubmitting ? "Enviando..." : "Enviar postulacion"}
                  </Button>
                </Column>
              </form>

              {/* Status Feedback */}
              {submitStatus === "success" && (
                <Feedback variant="success" title="Postulacion enviada">
                  Gracias por tu interes. Revisaremos tu postulacion y te contactaremos pronto.
                </Feedback>
              )}
              {submitStatus === "error" && (
                <Feedback variant="danger" title="Error al enviar">
                  Hubo un problema al enviar tu postulacion. Por favor intenta nuevamente.
                </Feedback>
              )}
          </Column>
        </Row>
      </Column>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 900px) {
            .job-detail-row {
              flex-direction: column !important;
            }
          }
          @media (min-width: 768px) {
            .back-button-mobile {
              display: inline-flex !important;
            }
          }
        `
      }} />
    </Column>
  );
}
