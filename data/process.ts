export type ProcessStep = {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: "Search",
    title: "Plan",
    description:
      "We align on the goal, map the smallest valuable version, and surface the risks before a line of code is written.",
  },
  {
    icon: "Code2",
    title: "Build",
    description:
      "Design and development move together in tight weekly cycles, so you see real progress instead of promises.",
  },
  {
    icon: "FlaskConical",
    title: "Test",
    description:
      "Automated checks and real-device passes catch the problems, and you get hands-on time before anything ships.",
  },
  {
    icon: "Rocket",
    title: "Deploy",
    description:
      "We launch with confidence, watch the metrics, and iterate on what the first real users actually tell us.",
  },
];
