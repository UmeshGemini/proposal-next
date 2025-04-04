type Heading = {
  code: string;
  title: string;
  description: string;
};

type Features = Record<string, Record<string, string>>;
export type THealthCompare = {
  heading: Heading[];
  features: Features;
};
