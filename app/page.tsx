import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults';

export default function Home({searchParams}: {searchParams : {query?: string}}) {



  return (
    <div className="flex flex-col items-center mt-4">
      <SearchBar/>
      <SearchResults searchParams={searchParams}/>
    </div>
  );
}
