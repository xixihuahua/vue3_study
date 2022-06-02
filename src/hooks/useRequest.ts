import axios from "axios";
import { ref } from "vue";
export default function (url: string) {
  const loading = ref(true)
  const data = ref({})
  const errorMsg = ref('')
  axios.get(url).then(res => {
    data.value = res;

  })
  return {
    loading,
    data,
    errorMsg
  }
  
}
