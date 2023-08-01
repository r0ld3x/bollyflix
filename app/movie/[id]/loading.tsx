import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
    <div key={index} className="bg-slate-800 w-full rounded-md object-cover">
      <Skeleton className="h-44 w-full bg-slate-500 dark:bg-slate-400 rounded-md" />
      <Skeleton className="h-12 w-full bg-slate-200 dark:bg-slate-350 rounded-md" />
    </div>
  ));
}

// <div className="px-44 py-2 items-center">
//       <div className="grid grid-cols-5 gap-4">
//         {mounted ? (
//           <Loading />
//         ) : (
//           movies.map((video: any) => (
//             <div
//               key={video.id}
//               className="rounded-sm border-2  border-slate-500 border-solid"
//             >
//               <Link href={"/" + video.id}>
//                 <Image
//                   src={video.thumbnail}
//                   alt="video"
//                   className="object-cover w-full rounded-md"
//                   height={200}
//                   width={300}
//                 />
//               </Link>
//               <p className="text-center py-4 hover:text-purple-600">
//                 {video.title}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
