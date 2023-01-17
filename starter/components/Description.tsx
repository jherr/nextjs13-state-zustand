import VisualWrapper from "./VisualWrapper";

export default function Description({ description }: { description: string }) {
  return (
    <VisualWrapper rsc name="Description">
      <h1 className="text-3xl font-bold">Description</h1>
      <p className="mt-2 italic">{description}</p>
    </VisualWrapper>
  );
}
