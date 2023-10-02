import { useState } from 'react'
import Loader from 'components/loader'
import Spinner from 'components/spinner'

function Catalogue() {
  const [isInputMenuOpen, setIsInputMenuOpen] = useState(false)

  return (
    <div className="mx-auto max-w-7xl p-2 sm:p-6 lg:p-8 bg-base-200">
      <h1 className="text-center text-xl font-bold font-conthax">
        Components catalogue
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Element</th>
              <th>Specs</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Margin</p>
              </td>
              <td>
                <div className="flex items-center">
                  <ul>
                    <li>
                      Horizontal: <b>16px per side</b>
                    </li>
                    <li>
                      Vertical: <b>24px top and bottom</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <p>Padding</p>
              </td>
              <td>
                <div className="flex items-center">
                  <ul>
                    <li>
                      Horizontal: <b>16px per side</b>
                    </li>
                    <li>
                      Vertical: <b>24px top and bottom</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <p>Title (h1)</p>
              </td>
              <td>
                <div className="flex items-center">
                  <ul>
                    <li>
                      Font family: <b>conthrax, sans-serif</b>
                    </li>
                    <li>
                      Font size: <b>24px</b>
                    </li>
                    <li>
                      Font weight: <b>700</b>
                    </li>
                    <li>
                      Color: <b>teal</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <h1 className="text-2xl font-conthax font-bold text-teal">
                  This is a title
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <p>Title (h2)</p>
              </td>
              <td>
                <div className="flex items-center">
                  <ul>
                    <li>
                      Font family: <b>conthrax, sans-serif</b>
                    </li>
                    <li>
                      Font size: <b>20px</b>
                    </li>
                    <li>
                      Font weight: <b>700</b>
                    </li>
                    <li>
                      Color: <b>teal</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <h2 className="text-xl font-conthax font-bold text-teal">
                  This is a sub heading
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <p>Button</p>
              </td>
              <td>
                <div className="flex items-center">
                  <p>
                    <i>Four variants</i>
                  </p>
                </div>
              </td>
              <td>
                <button className="btn btn-primary mr-2">Primary</button>
                <button className="btn btn-neutral mr-2">Neutral</button>
                <button className="btn btn-ghost mr-2">Ghost</button>
                <button className="btn btn-link">Link</button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Input</p>
              </td>
              <td>
                <div className="flex items-center">
                  <p>Dark background, lighter border and focus outline</p>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Click to open the menu..."
                  className="input-bordered input w-full h-12 max-w-xs text-primary-content"
                  onFocus={() =>
                    setIsInputMenuOpen((isInputMenuOpen) => !isInputMenuOpen)
                  }
                  onChange={() => {}}
                  onBlur={() =>
                    setIsInputMenuOpen((isInputMenuOpen) => !isInputMenuOpen)
                  }
                />
                {isInputMenuOpen && (
                  <ul
                    className="menu w-full max-w-xs border border-base-200 bg-base-100 p-4 shadow-md"
                    onMouseDown={(event) => event.preventDefault()}
                  >
                    <li className="text-primary-content hover:text-accent my-2">
                      <a href="#">First item</a>
                    </li>
                    <li className="text-primary-content hover:text-accent my-2">
                      <a href="#">Second item</a>
                    </li>
                    <li className="text-primary-content hover:text-accent my-2">
                      <a href="#">Third item</a>
                    </li>
                  </ul>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <p>Spinner</p>
              </td>
              <td>
                <p>
                  Can change it's text via the <b>context</b> prop
                </p>
              </td>
              <td>
                <Spinner context="components" />
              </td>
            </tr>
            <tr>
              <td>
                <p>Loader</p>
              </td>
              <td></td>
              <td>
                <Loader />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Catalogue
