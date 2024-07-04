import {
  Card,
  CardBody,
  Typography,
  IconButton,
  CardHeader,
} from "@material-tailwind/react";
import {
  Check,
  Copy,
  Github,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Discord  from "@assets/discord.png"
import Insta from "@assets/instagram.webp"
import Git from "@assets/github.png"
import Yt from "@assets/youtube.jpg"

type Props = {
  name: string;
  icon: ReactNode;
  url: string;
  img: string;
  desc: string;
}[];

const props: Props = [
  {
    name: "Instagram",
    icon: <Instagram size={40} color="#FCFEFF" />,
    img: Insta.src,
    url: "https://instagram.com/itclub48",
    desc: "@itclub48 | 🍜"
  },
  {
    name: "Discord",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={40} fill="#FCFEFF">
        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
      </svg>
    ),
    img: Discord.src,
    url: "https://dsc.gg/terr48yte",
    desc: "@TERR48YTE | the community for technology discussion 😉🍵"
  },

  {
    name: "Github",
    icon: <Github size={40} color="#FCFEFF" />,
    img: Git.src,
    url: "https://github.com/terr48yte/",
    desc: "@terr48yte | all project from me 👩‍💻"
  },
  {
    name: "Youtube",
    icon: <Youtube size={40} color="#FCFEFF" />,
    img: Yt.src,
    url: "https://youtube.com/@terr48yte",
    desc: "@terr48yte | 🍿"
  },

];

export default function CardWithLink() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<number | null>(null);

  return (
    <div className="md:grid md:flex-col md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 items-center justify-center md:px-10 w-full flex flex-col max-w-6xl">
      {
        props?.map((link, i) => (
          <Card
            key={link.name}
            className="w-full mt-6 ls bg-[#15101a] border border-gray-800 "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardHeader
              className="relative"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <img src={link.img}
              className="aspect-[6/3] object-cover"
              alt="banner"
              />
            </CardHeader>
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex items-center gap-4">
                {link.icon}
                <Typography
                  variant="h5"
                  onClick={()=> {
                    window.location.href = link.url
                  }}
                  className="text-[#FCFEFF] font-bold cursor-pointer"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {link.name}
                </Typography>
                <IconButton
                  onClick={() => {
                    copy(link.url);
                    setCopied(i);
                  }}
                  onMouseLeave={() => setCopied(null)}
                  variant="text"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="ml-auto"
                >
                  {copied === i ? <Check color="#FCFEFF"/> : <Copy color="#FCFEFF"/>}
                </IconButton>
              </div>
              <p
                className="mt-3 h-12 line-clamp-2 text-gray-400 leading-relaxed"
              >
                {link.desc.toLowerCase()}
              </p>
            </CardBody>
          </Card>
        ))}
    </div>
  );
}
