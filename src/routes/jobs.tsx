import { createFileRoute } from "@tanstack/react-router";
import { FeaturePage, featureHead } from "@/components/FeaturePage";
import { FEATURES } from "@/content/features";

export const Route = createFileRoute("/jobs")({
  head: () => featureHead(FEATURES.jobs),
  component: () => <FeaturePage feature={FEATURES.jobs} />,
});
