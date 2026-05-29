import { notFound } from "next/navigation";
import { VentureLanding } from "../components/venture/VentureLanding";
import { getVentureById } from "../constants/site";

export default function PureFlowPage() {
  const venture = getVentureById("pureflow");
  if (!venture) notFound();
  return <VentureLanding venture={venture} />;
}
