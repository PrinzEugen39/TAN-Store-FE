export default function LocationBadgeTop() {
  return (
    <div className="absolute w-40 h-40 overflow-hidden ribbon -top-2 -left-2 before:absolute before:top-0 before:right-0 before:border-4 before:border-blue-300 before:-z-[1] after:absolute after:bottom-0 after:left-0 after:border-4 after:border-blue-300 after:-z-[1]">
      <div className="text-blue-900 absolute top-[43px] -left-14 w-60 bg-blue-200 py-2.5 text-center -rotate-45 font-inter font-medium">
        Our Store Location
      </div>
    </div>
  );
}
