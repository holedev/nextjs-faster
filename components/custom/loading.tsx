import { Skeleton } from "../ui/skeleton";

const LoadingPage = () => (
  <section className='flex h-full flex-col items-center justify-center py-4'>
    <div className='flex items-center justify-center gap-4'>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
    <div className='mt-4 flex flex-col gap-4'>
      <Skeleton className='h-4 w-[300px]' />
      <Skeleton className='h-4 w-[250px]' />
      <Skeleton className='h-4 w-[200px]' />
    </div>
  </section>
);

const LoadingComponent = () => (
  <section className='flex flex-col items-center justify-center py-4'>
    <div className='flex items-center justify-center gap-4'>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  </section>
);

export { LoadingComponent, LoadingPage };
