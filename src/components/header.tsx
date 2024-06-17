import { Typography } from "@material-tailwind/react";

interface Props {
  img: string;
  title: string;
  slogan: string;
}

export default function Header(props: Readonly<Props>) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 group/head text-center">
      <img
        className="rounded-full size-40 group-hover/head:saturate-0"
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
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {props.slogan}
      </Typography>
    </div>
  );
}
