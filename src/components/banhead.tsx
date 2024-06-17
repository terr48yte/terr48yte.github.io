
interface Props {
  img: string;
  title: string;
  slogan: string;
}
export default function BanHead(props: Readonly<Props>) {
  return (
    <main>
      <div className="flex items-center justify-center m-auto min-h-screen">
        <div className="fle flex-col items-center space-y-2 group/head">
          <img className="rounded-full size-44 m-auto group-hover/head:saturate-0" src={props.img} alt="logo" />
          <h1 className="text-black font-bold text-[60px] text-center">
            {props.title}
          </h1>
          <p className="text-[25px] text-gray-600 font-sans">
            {props.slogan}
          </p>
        </div>
      </div>
    </main>
  );
}
