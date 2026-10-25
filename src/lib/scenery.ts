export type Scene = {
  id: string;
  src: string;
  label: string;
};

/**
 * Photographs of the Life Time Evanston club spaces, taken from
 * https://www.lifetime.life/locations/il/evanston.html and stored in
 * public/scenery. Only people-free scenes, so they work behind text.
 */
export const scenes: Scene[] = [
  { id: "entrance", src: "/scenery/entrance.jpg", label: "The club entrance" },
  {
    id: "exterior",
    src: "/scenery/exterior.jpg",
    label: "The club exterior at dusk",
  },
  {
    id: "workout-floor",
    src: "/scenery/workout-floor.jpg",
    label: "The workout floor",
  },
  {
    id: "pilates-room",
    src: "/scenery/pilates-room.jpg",
    label: "The Pilates room",
  },
  { id: "studio", src: "/scenery/studio.jpg", label: "A group fitness studio" },
  {
    id: "pickleball-courts",
    src: "/scenery/pickleball-courts.jpg",
    label: "The pickleball courts",
  },
  {
    id: "pickleball-indoor",
    src: "/scenery/pickleball-indoor.jpg",
    label: "The indoor courts",
  },
  { id: "sauna", src: "/scenery/sauna.jpg", label: "The sauna" },
  { id: "life-cafe", src: "/scenery/life-cafe.jpg", label: "The Life Café" },
];

export function pickScene(avoidId?: string | null): Scene {
  const pool = avoidId
    ? scenes.filter((scene) => scene.id !== avoidId)
    : scenes;
  const source = pool.length > 0 ? pool : scenes;
  return source[Math.floor(Math.random() * source.length)];
}
