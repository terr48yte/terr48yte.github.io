import { Typography } from "@material-tailwind/react";
import image from "@assets/image.png";

interface Props {
  img: string;
  title: string;
  slogan: string;
}

const props: Props = {
  img: image.src,
  slogan: "Information Technology Club of SMA Negeri 48 Jakarta",
  title: "TERR48YTE",
};

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-2  text-center">
      <img
        className="rounded-full size-32 "
        src={props.img}
        alt="logo"
      />
      <Typography
        variant="h1"
        className="text-[#FCFEFF]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.title}
      </Typography>
      <Typography
        variant="paragraph"
        className="text-[#FCFEFF]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.slogan}
      </Typography>
    </div>
  );
}
