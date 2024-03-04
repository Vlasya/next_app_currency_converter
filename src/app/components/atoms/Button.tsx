interface Props {
  text: string;
  isBlueBtn?: boolean;
  onClick: () => void;
}

export default function Button({ text, isBlueBtn, onClick }: Props) {
  return (
    <button
      className={`text-${isBlueBtn ? 'lightText' : 'baseColor'} bg-${
        isBlueBtn ? 'blueBg' : 'pageBg'
      } w-[234px] h-[53px] flex justify-center items-center rounded ${
        isBlueBtn && 'bg-blueBg'
      } `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
