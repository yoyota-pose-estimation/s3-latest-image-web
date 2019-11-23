import { useSelector, useDispatch } from "react-redux"

function mergeStore(rootState, dispatch) {
  return Object.keys(rootState).reduce((prev, curr) => {
    const model = { ...prev }
    model[curr] = { ...rootState[curr], ...dispatch[curr] }
    return model
  }, {})
}

export default function() {
  const rootState = useSelector(state => state)
  const dispatch = useDispatch()
  // const [state, setState] = useState(mergeStore(rootState, dispatch))
  // useLayoutEffect(() => {
  //   setState(mergeStore(rootState, dispatch))
  // }, [rootState, dispatch])
  return mergeStore(rootState, dispatch)
}
