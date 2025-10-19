import EVLayout from "../EVLayout";
import TeamPageConfigs from "../../../../data/EVTeamPageConfigs.json";
import { Config } from "../../../../types/EVPageConfig";

interface Params {
  params: {
    team: string;
  };
}

interface TeamPageConfigsInterface {
  [key: string]: Config | null;
}

export default function Page({ params: { team } }: Params) {
  const config: Config | null =
    (TeamPageConfigs as TeamPageConfigsInterface)[team] || null;

  if (!config) {
    return "Not Found";
  }

  return <EVLayout config={config} />;  
}
