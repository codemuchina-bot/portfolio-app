export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Alex shipped what two agencies couldn't. Fast, communicative, and the quality bar never dropped once. Our conversion numbers speak for themselves.",
    name: "Sofia Nguyen",
    title: "CEO, Northwind",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The dashboard went from our biggest support headache to the feature customers rave about. Devix understood the data and the humans reading it.",
    name: "Marcus Bell",
    title: "Head of Product, Quantum",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Working with Alex felt like adding a senior partner, not a contractor. Opinionated in the best way and always focused on what actually moves the needle.",
    name: "Priya Sharma",
    title: "Founder, Lumen",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Our new brand and site landed us on the front page of three newsletters in a week. The system is so clear the team extends it themselves now.",
    name: "David Okafor",
    title: "Co-founder, Vertex",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  },
];
