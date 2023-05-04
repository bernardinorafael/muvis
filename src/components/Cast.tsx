import Image from 'next/image'

import { Cast as CastType } from '@/types/cast'

import { FallbackCast } from './SheetMoviePreview/components/FallbackCast'

type CastProps = Pick<CastType, 'profile_path' | 'name' | 'character'>

export function Cast(props: CastProps) {
  return (
    <div className="flex gap-2">
      {props.profile_path ? (
        <Image
          className="rounded"
          height={38}
          width={38}
          src={`https://image.tmdb.org/t/p/w185/${props.profile_path}`}
          alt={props.name}
        />
      ) : (
        <FallbackCast />
      )}

      <div className="flex flex-col">
        <strong className="text-sm font-extrabold text-zinc-300">
          {props.name}
        </strong>

        <span className="text-xs text-zinc-400">{props.character}</span>
      </div>
    </div>
  )
}
