import { Skeleton } from "./ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Skeleton className="w-40 h-40 rounded-sm sm:w-56 bg-slate-300" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-40 h-4 sm:w-56 bg-slate-300" />
        <Skeleton className="w-40 h-4 sm:w-56 bg-slate-300" />
        <Skeleton className="w-20 h-4 bg-slate-300" />
        <Skeleton className="w-32 h-4 sm:w-44 bg-slate-300" />
      </div>
    </div>
  );
}
