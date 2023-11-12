import Logo from "../Logo";

export default function Header({ header }: any) {
  return (
    <div className={header}>
      <Logo color={"#101828"} />
    </div>
  );
}
