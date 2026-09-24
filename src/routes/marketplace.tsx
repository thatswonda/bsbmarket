import { createFileRoute } from "@tanstack/react-router";
import { FeaturePage, featureHead } from "@/components/FeaturePage";
import { FEATURES } from "@/content/features";

export const Route = createFileRoute("/marketplace")({
  head: () => featureHead(FEATURES.marketplace),
  component: () => <FeaturePage feature={FEATURES.marketplace} />,
});
