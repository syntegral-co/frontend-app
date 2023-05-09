import Select from 'react-tailwindcss-select'
import { useThemes } from './hooks'
import { Option } from 'react-tailwindcss-select/dist/components/type'

function ThemesToggles() {
  const { themes, selectedThemes, toggleThemes } = useThemes()

  const options: Option[] = themes.map((theme) => ({
    value: theme.id.toString(),
    label: theme.name,
  }))

  const onChange = (options: any) => {
    let selectedOptions: number[] = []

    if (options) {
      selectedOptions = options.map((option: Option) => parseInt(option.value))
    }

    toggleThemes(selectedOptions)
  }

  return (
    <>
      <label className="mb-2 inline-block" htmlFor="themes">
        Choose a theme...
      </label>
      <Select
        value={options.filter((option) =>
          selectedThemes.includes(parseInt(option.value)),
        )}
        primaryColor={'accent'}
        options={options}
        isMultiple={true}
        isSearchable={true}
        onChange={onChange}
        classNames={{
          menu: 'relative z-10 bg-base-200 z-20',
          searchBox:
            'w-full py-2 pl-8 mt-4 text-sm text-primary-content bg-base-200 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none',
          searchIcon: 'absolute mt-6 w-5 h-5 pb-0.5 ml-2 text-gray-500',
          listItem: () =>
            'block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded text-primary-content hover:bg-base-100 cursor-pointer hover:text-accent',
          tagItem: () =>
            'badge badge-md badge-accent flex hover:bg-primary-focus cursor-pointer',
        }}
      />
    </>
  )
}

export default ThemesToggles
