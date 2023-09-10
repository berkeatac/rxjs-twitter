import React from 'react'

import { FiltersEnum } from '../../types'

interface FiltersProps {
  activeFilter: FiltersEnum
  changeFilter: (filter: FiltersEnum) => void
}

const Filters = ({ activeFilter, changeFilter }: FiltersProps) => {
  return (
    <fieldset className="mb-2 flex flex-row">
      <legend>Filters:</legend>

      <input
        type="radio"
        id="all"
        name="filter"
        className="mr-1"
        checked={activeFilter === FiltersEnum.ALL}
        onChange={() => changeFilter(FiltersEnum.ALL)}
      />
      <label htmlFor="all" className="mr-4">
        All
      </label>

      <input
        type="radio"
        id="liked"
        name="filter"
        className="mr-1"
        checked={activeFilter === FiltersEnum.LIKED}
        onChange={() => changeFilter(FiltersEnum.LIKED)}
      />
      <label htmlFor="liked" className="mr-4">
        Liked
      </label>
    </fieldset>
  )
}

export default React.memo(Filters)
