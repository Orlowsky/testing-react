
type WelcomeProps = {
    name?: string
}
export const Welcome = (props: WelcomeProps) => {
  return (
    <div>Welcome {props.name}</div>
  )
}
