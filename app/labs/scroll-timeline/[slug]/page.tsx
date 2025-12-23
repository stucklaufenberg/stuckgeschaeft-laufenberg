import { notFound } from "next/navigation";
import { labsProjects } from "@/data/labs";
import ScrollTimelinePage from "@/components/ScrollTimelinePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = labsProjects[slug];

  if (!project) {
    notFound();
  }

  return <ScrollTimelinePage data={project} />;
}
