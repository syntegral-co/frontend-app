import { useRecoilValue } from 'recoil'
import { useCurrentAsset } from 'pages/assets/hooks'
import { useCurrentTheme } from 'pages/assets/themes/hooks'
import { qaState } from 'components/themes-toggles/atoms'
import { formatReferences } from 'utils/helpers'
import References from 'components/references'

function ThemeQA() {
  const currentAsset = useCurrentAsset()
  const theme = useCurrentTheme()
  const QAs = useRecoilValue(qaState)

  const themeQAs = QAs.filter(
    (qa) => qa.assetId === currentAsset!.id && qa.themeId === theme!.id,
  ).sort((a, b) => {
    if (
      a.answer ===
      'No information for this question exists within the documentation for this asset.'
    )
      return 1

    if (a.answer === 'Insufficient data.') return 1

    return -1
  })

  if (!themeQAs.length) return null

  return (
    <div className="rounded-md bg-base-200 p-4">
      <h2 className="mb-4 font-bold text-lg">Questions</h2>
      <ol className="mt-4 list-none pl-2">
        {themeQAs.map((qa, index) => {
          const references = formatReferences(qa.references)

          return (
            <li className="mt-2 mb-4 cursor-pointer" key={index}>
              <details open={index === 0}>
                <summary>{qa.question}</summary>
                <div className="mt-2 bg-base-100 p-4 ">
                  <p className="italic">{qa.answer}</p>
                  {references.length ? (
                    <>
                      <div className="divider"></div>
                      <p className="mt-4 font-bold">References</p>
                      <ol>
                        <References documents={references} />
                      </ol>
                    </>
                  ) : null}
                </div>
              </details>
              {index + 1 < themeQAs.length ? (
                <div className="divider"></div>
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default ThemeQA
