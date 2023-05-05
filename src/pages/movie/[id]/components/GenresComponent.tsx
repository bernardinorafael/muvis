import { MovieDetailed } from '@/types/movie-detailed'

type Genres = Pick<MovieDetailed, 'genres'>

export function GenresCompoent({ genres }: Genres) {
  return (
    <div className="flex flex-col gap-2">
      <strong className="text-sm font-normal text-zinc-400">Gêneros</strong>

      <div className="flex items-center gap-2">
        <span className="text-base font-semibold text-zinc-400">•</span>

        {genres.map((genre, i) => {
          return (
            <span className="text-base font-semibold text-zinc-400" key={genre.id}>
              {genre.name}
            </span>
          )
        })}

        <span className="text-base font-semibold text-zinc-400">•</span>
      </div>
    </div>
  )
}
