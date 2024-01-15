export default function LocationBadgeBottom() {
  return (
    <div className="absolute w-40 h-40 overflow-hidden ribbon -bottom-2 -right-2 before:absolute before:bottom-0 before:left-0 before:border-4 before:border-blue-300 before:-z-[1] after:absolute after:top-0 after:right-0 after:border-4 after:border-blue-300 after:-z-[1]">
      <div className="absolute bottom-[43px] -right-14 w-60 bg-blue-200 py-[23px] -rotate-45 font-inter font-medium"></div>
    </div>
  );
}
