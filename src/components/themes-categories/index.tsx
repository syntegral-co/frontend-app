import { useCurrentAssetClass } from 'components/asset-class-switcher/hooks'
import { useCurrentCategory } from './hooks'
import { useRecoilValue } from 'recoil'
import { categoriesState } from 'components/themes-toggles/atoms'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

function ThemesCategories() {
  const currentAssetClass = useCurrentAssetClass()
  const currentCategory = useCurrentCategory()
  const categories = useRecoilValue(categoriesState)

  const availableCategories = currentAssetClass!.id === 7 ? [5, 6, 7] : [8]

  const tabs = availableCategories!.map((category, index) => (
    <Link
      key={index}
      to={`?category=${category}`}
      className={clsx('tab', {
        'tab-active !text-base-200': currentCategory!.id === category,
      })}
    >
      {categories.find((ctg) => ctg.id === category)!.name}
    </Link>
  ))

  return <div className="tabs-boxed tabs">{tabs}</div>
}

export default ThemesCategories
