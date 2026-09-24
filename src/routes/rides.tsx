import { createFileRoute } from "@tanstack/react-router";
import { FeaturePage, featureHead } from "@/components/FeaturePage";
import { FEATURES } from "@/content/features";

export const Route = createFileRoute("/rides")({
  head: () => featureHead(FEATURES.rides),
  component: () => <FeaturePage feature={FEATURES.rides} />,
});
