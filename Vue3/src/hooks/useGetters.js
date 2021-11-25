import { mapGetters} from "vuex"
import useMapper from "./useMapper"
export default function(keys) {
    return useMapper(keys, mapGetters)
}