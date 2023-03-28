import { useDrawer } from './hooks'

function Drawer(): JSX.Element {
  const { isDrawerOpen } = useDrawer()

  const positionClass = isDrawerOpen ? 'right-0' : 'right-full'
  const classes = `transition-all absolute inset-y-0 z-20 h-screen w-1/2 ${positionClass}`

  return (
    <div className={classes}>
      <object
        data="https://storage.googleapis.com/syntegral-poc/Seplat%20Energy%20Plc/Company%20Docs/20181030%20-%20INTRM%20-%20SEPLAT_NG%20-%20Interim%20reports%20interim%20financial%20-%2090%20pages.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=syntegral-poc%40axiomatic-port-376402.iam.gserviceaccount.com%2F20230317%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230317T122721Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=aeea65d0fbd3bb413227ee0e5be866b2a8a177351cdc61467e0a5c2ff1378a9e4e30fad19515e39dd363d39e47bd49290054067dcb121d050ff7a7399c3ae2209f15bcea177f63fc53a0d9f6a56c696d98a24fd5c2fd3b21a273e13c6c0b7da92aa0fc6931ad70b3f7d8186767b17020f665ec3cdcc584cafc43488490e151ee2d50ddc193e0b5dfbcfd49e764bb1951a8f94e77543c59edc0c776fdbf96ca8af8db7c29057a4b5afc50cc1eb872e8cf98f714a71d22f96fa86483bf7ff7babe2ff8f439370ed624fc8c4eab38a60f075532e25a6875b8cf5a756f510041b9728aab1fba31f719553fef667e84babc4d95565929f3240f384b3df6bbb569ce08"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>
    </div>
  )
}

export default Drawer
