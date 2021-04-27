import {debounce} from 'common/utlies'

export const itemlist = {
  mounted(){
    const refresh = debounce(this.$refs.wrapper1.refresh,50);
    this.$bus.$on("imgload",()=>{
      refresh()
    });
  }
}
