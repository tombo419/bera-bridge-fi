import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Skeleton className="h-4 w-32 mb-4" />
      <Skeleton className="h-10 w-3/4 mb-4" />
      <Skeleton className="h-6 w-full mb-8" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </article>
  )
}