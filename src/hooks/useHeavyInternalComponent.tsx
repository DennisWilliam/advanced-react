import { HeavyComponent } from "../components/heavyComponent";

export const useHeavyInternalComponent = () => {
  return {
    HeavyComponent: (
      <HeavyComponent alias="Heavy Internal Component" numberOfItems={10} />
    ),
  };
};
