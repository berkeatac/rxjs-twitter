import React from 'react'

import { FiltersEnum } from '../../types'

interface FiltersProps {
  activeFilter: FiltersEnum
  changeFilter: (filter: FiltersEnum) => void
}

const Filters = ({ activeFilter, changeFilter }: FiltersProps) => {
  return (
    <fieldset className="flex flex-row">
      <legend>Filters:</legend>

      <div className="mr-2">
        <input
          type="radio"
          id="all"
          name="filter"
          checked={activeFilter === FiltersEnum.ALL}
          onChange={() => changeFilter(FiltersEnum.ALL)}
        />
        <label htmlFor="all">All</label>
      </div>

      <div className="mx-2">
        <input
          type="radio"
          id="liked"
          name="filter"
          checked={activeFilter === FiltersEnum.LIKED}
          onChange={() => changeFilter(FiltersEnum.LIKED)}
        />
        <label htmlFor="liked">Liked</label>
      </div>
    </fieldset>
  )
}

export default React.memo(Filters)
