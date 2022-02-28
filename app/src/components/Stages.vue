<template>
    <div>
        <stage 
            v-for="{stage, key} in stages"
            :key="key"
            :start-date="stage.startDate"
            :end-date="stage.endDate"
            :location="stage.location"
            :name="stage.name"
            :link="stage.link"
        ></stage>
    </div>
</template>

<script>
import Stage from './Stage.vue'

export default {
    name: 'Stages',
    components: [
        Stage
    ],
    data () {
        return {
            stages: []
        }
    },
    mounted() {
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1AWIDHqtH7m6715XM7yhVqrOUumjJZzzPCBLwpvlSKAw/values/stages!2:1000?key=AIzaSyBjxkfGwlThS3JGnh95mYG4vvEgXK4pxb0"
        fetch(url)
            .then(async(res) => {
                const {data} = await res.json()
                this.data = data.map(s => ({
                    startDate: s[0],
                    endDate: s[1],
                    location: s[2],
                    name: s[3],
                    link: s[4]
                }))
            })
    }
}
</script>