import { mapState } from "vuex"
import useMapper from "./useMapper"
export default function (state) {
    return useMapper(state, mapState)
}