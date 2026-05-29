declare module "react-water-wave" {
  import { FC, ReactNode } from "react";

  interface WaterWaveProps {
    imageUrl?: string;
    dropRadius?: string;
    perturbance?: string;
    resolution?: string;
    children: () => ReactNode;
  }

  const WaterWave: FC<WaterWaveProps>;
  export default WaterWave;
}
