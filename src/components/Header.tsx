import { Typography } from "@material-tailwind/react";
import logo from "@assets/logo.png";

interface Props {
  img: string;
  title: string;
  slogan: string;
}

const props: Props = {
  img: logo.src,
  slogan: "Information Technology Club of SMA Negeri 48 Jakarta",
  title: "TERR48YTE",
};

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 group/head text-center">
      <img
        className="rounded-full size-36 group-hover/head:saturate-0"
        src={props.img}
        alt="logo"
      />
      <Typography
        variant="h1"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.title}
      </Typography>
      <Typography
        variant="paragraph"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.slogan}
      </Typography>
    </div>
  );
}
