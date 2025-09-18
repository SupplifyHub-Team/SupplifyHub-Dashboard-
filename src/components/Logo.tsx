import LogoImage from "@/../public/logov3.png";
export default function Logo({ size }: { size: number }) {
  return (
    <div>
      <img
        width={size}
        height={size}
        src={LogoImage}
        className=" object-contain rounded-full"
        alt="logo"
      />
    </div>
  );
}
