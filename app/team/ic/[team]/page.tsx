import ICLayout from "../ICLayout";
import TeamPageConfigs from "../../../../data/TeamPageConfigs.json";
import { Config } from "../../../../types/ICPageConfig";

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
    (TeamPageConfigs as TeamPageConfigsInterface)[team] ;

  if (!config) {
    return "Not Found";
  }

  return <ICLayout config={config} />;
}
