import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
  return Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
    <div
      key={index}
      className="bg-slate-800 rounded-sm border-2 border-slate-500 border-solid inline-block w-full md:w-auto sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5 mb-3"
    >
      <Skeleton className="h-44 w-full bg-slate-500 dark:bg-slate-400 rounded-md" />
      <Skeleton className="h-12 w-full bg-slate-200 dark:bg-slate-350 rounded-md" />
    </div>
  ));
}
