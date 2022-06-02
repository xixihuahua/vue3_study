
import { onMounted, onUnmounted, ref } from "vue"
export default function(){
    const x = ref(0)
    const y = ref(0)

    const clickHandler = (event:MouseEvent)=>{
        x.value = event.pageX;
        y.value = event.pageY;
    }
    onMounted(()=>{
        window.addEventListener('click', clickHandler)
    })

    onUnmounted(()=>{
        window.removeEventListener('click', clickHandler)
    })
    return {
        x,
        y
    }
}
