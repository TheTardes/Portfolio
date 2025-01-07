interface Props {
  className?: string;
  gif: string;
}

export default function MacbookDisplay({ className, gif }: Props) {
  return (
    <div className={`relative ${className}`}>
      <img src="/assets/common/macbook.png" alt="project" className="" />
      <img src={gif} alt="project" className="absolute w-[76%] h-[82%] top-[4.5%] left-[50%] -translate-x-[50%] rounded-t-xl" />
    </div>
  );
}
