"use client";

import { useState } from "react";
import {
  Column,
  Row,
  Text,
  Heading,
  Icon,
  Button,
  Grid,
} from "@once-ui-system/core";
import { jobDetails, jobAreas } from "@/resources/content";
import { JobOpening } from "jobs";

function JobCard({ job }: { job: JobOpening }) {
  return (
    <Column
      fillWidth
      padding="12"
      gap="8"
      background="overlay"
      border="neutral-alpha-weak"
      radius="l"
    >
      <Column fillWidth padding="20" gap="24">
        <Column fillWidth gap="4">
          <Heading as="h3" variant="heading-strong-l" style={{ textWrap: "balance" }}>
            {job.title}
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {job.salaryRange}
          </Text>
        </Column>

        <Column fillWidth gap="16">
          <Row gap="8" vertical="center">
            <Icon name="mapPin" size="xs" onBackground="neutral-weak" />
            <Text variant="body-default-s" onBackground="neutral-medium">
              {job.location}
            </Text>
          </Row>
          <Row gap="8" vertical="center">
            <Icon name="clock" size="xs" onBackground="neutral-weak" />
            <Text variant="body-default-s" onBackground="neutral-medium">
              {job.type}
            </Text>
          </Row>
          <Row gap="8" vertical="center">
            <Icon name="briefcase" size="xs" onBackground="neutral-weak" />
            <Text variant="body-default-s" onBackground="neutral-medium">
              {job.area}
            </Text>
          </Row>
        </Column>
      </Column>

      <Button
        href={job.href}
        variant="secondary"
        fillWidth
        arrowIcon
      >
        Ver puesto
      </Button>
    </Column>
  );
}

export default function CarrerasPage() {
  const [selectedArea, setSelectedArea] = useState("Todos");

  const filteredJobs =
    selectedArea === "Todos"
      ? jobDetails
      : jobDetails.filter((job) => job.area === selectedArea);

  return (
    <Column fillWidth center>
      <Column
        fillWidth
        center
        padding="l"
        style={{ minHeight: "20vh" }}
        suppressHydrationWarning
      >
        <Column maxWidth="m" horizontal="center" gap="l" align="center">
          <Heading
            variant="display-strong-l"
            marginTop="128"
            style={{ textAlign: "center", textWrap: "balance", fontSize: 'clamp(40px, 8vw, 64px)' }}
          >
            Sumate al equipo
          </Heading>
          <Text
            variant="body-default-xl"
            style={{ color: "#E0E0E0", textAlign: "center", textWrap: "balance" }}
            marginBottom="32"
          >
            Buscamos personas apasionadas que nos ayuden a construir el futuro
          </Text>
        </Column>
      </Column>

      <Column
        fillWidth
        center
        padding="l"
        gap="32"
        style={{ maxWidth: "var(--responsive-width-l)" }}
      >
        <Row gap="8" wrap className="filter-buttons-row">
          {jobAreas.map((area) => (
            <Button
              key={area}
              size="s"
              variant={selectedArea === area ? "primary" : "secondary"}
              onClick={() => setSelectedArea(area)}
              style={selectedArea !== area ? { borderWidth: '2px' } : undefined}
            >
              {area}
            </Button>
          ))}
        </Row>

        <Grid
          fillWidth
          columns="3"
          gap="8"
          s={{ columns: "1" }}
        >
          {filteredJobs.map((job, index) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>

        {filteredJobs.length === 0 && (
          <Column fillWidth center padding="xl">
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              No hay puestos disponibles en esta categoria por el momento.
            </Text>
          </Column>
        )}
      </Column>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 767px) {
            .filter-buttons-row {
              justify-content: center !important;
            }
          }
        `
      }} />
    </Column>
  );
}
