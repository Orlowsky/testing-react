import { WelcomeProps } from "./Welcome.types";

export const Welcome = (props: WelcomeProps) => {
  return <div>Welcome {props.name ? props.name : "Guest"}</div>;
};
