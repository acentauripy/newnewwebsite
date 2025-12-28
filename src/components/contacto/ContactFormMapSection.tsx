"use client";

import { useState, FormEvent, useEffect } from "react";
import { Column, Row, Heading, Text, Input, Textarea, Button, Feedback } from "@once-ui-system/core";
// import CountryPhonePrefixSelector from "./CountryPhonePrefixSelector";

export default function ContactFormMapSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // phonePrefix: "+595", // Default to Paraguay
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation functions for validate prop - returns error message or null
  // These turn the field red when format is invalid (only when there's a value)
  const validateEmail = (value: any): string | null => {
    if (!value) return null; // Let browser handle required
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(value))) {
      return " "; // Return space to trigger red color without showing message
    }
    return null;
  };

  const validatePhone = (value: any): string | null => {
    if (!value) return null; // Let browser handle required
    const phoneRegex = /^[\d\s\-+()]{7,}$/;
    if (!phoneRegex.test(String(value))) {
      return " "; // Return space to trigger red color without showing message
    }
    return null;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Browser validation handles required fields
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Combine phone prefix with phone number for submission
      const submissionData = {
        ...formData,
        // phone: `${formData.phonePrefix} ${formData.phone}`
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Row fillWidth gap="xl" maxWidth="l" m={{ direction: "column" }} suppressHydrationWarning>
      {/* Left Column - Form */}
      <Column flex={1} gap="16" paddingY="xl" fillWidth style={{ minWidth: 0 }}>
        <Column gap="s" marginTop="8" marginBottom="32" fillWidth>
          <Heading as="h2" variant="display-strong-s">
            Envianos un mensaje
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-medium" style={{ textWrap: 'balance' }}>
            ¿Tenés una idea que querés traer a la vida? Escribinos y la hacemos realidad.
          </Text>
        </Column>

        {/* Form Fields - wrapped in native form for browser validation */}
          <form onSubmit={handleSubmit} noValidate={false} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Column gap="-1" fillWidth padding="0" margin="0">
            <Input
              id="contact-form-name"
              label="Nombre"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              radius="top"
              height="m"
              autoComplete="name"
              required
              suppressHydrationWarning
            />
            <Input
              id="contact-form-email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              radius="none"
              height="m"
              autoComplete="email"
              required
              validate={validateEmail}
              errorMessage={false}
              suppressHydrationWarning
            />
            <Input
              id="contact-form-phone"
              label="Teléfono"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              radius="none"
              height="m"
              autoComplete="tel"
              required
              validate={validatePhone}
              errorMessage={false}
              suppressHydrationWarning
              // hasPrefix={
              //   <CountryPhonePrefixSelector
              //     value={formData.phonePrefix}
              //     onChange={(prefix) => setFormData(prev => ({ ...prev, phonePrefix: prefix }))}
              //   />
              // }
            />
            <Input
              id="contact-form-subject"
              label="Asunto"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              radius="none"
              height="m"
              autoComplete="subject"
              suppressHydrationWarning
            />
            <Textarea
              id="contact-form-message"
              label="Mensaje"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              radius="bottom"
              lines={4}
              resize="vertical"
              required
              autoComplete="off"
            />
          </Column>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            style={{ width: 'fit-content', marginTop: '16px' }}
            suppressHydrationWarning
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
          </form>

        {/* Status Feedback */}
        {submitStatus === 'success' && (
          <Feedback
            variant="success"
            title="¡Mensaje enviado!"
            description="Gracias por contactarnos. Te responderemos pronto."
          />
        )}
        {submitStatus === 'error' && (
          <Feedback
            variant="danger"
            title="Error de conexión"
            description="No se pudo enviar el mensaje. Por favor, intentá de nuevo más tarde."
          />
        )}
      </Column>

      {/* Right Column - Map */}
      <Column flex={1} radius="l" background="neutral-alpha-weak" style={{ overflow: 'hidden', minHeight: '32rem', position: 'relative' }}>
        <iframe
          src="https://maps.google.com/maps?q=Fernando%20de%20la%20Mora,%20Paraguay&output=embed"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            border: 0,
            display: 'block',
            minHeight: '32rem'
          }}
        />
      </Column>
    </Row>
  );
}
