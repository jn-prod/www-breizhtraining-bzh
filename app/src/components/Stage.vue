<template>
    <div class="row my-3">
    <div class="col-12">
       <span>Du {{startDate}} au {{endDate}} à {{location}} → {{name}}</span>
       <a :href="link" target="_blank\" rel="nofollow" class="btn btn-secondary ml-5 rounded-pill shadow">En savoir +</a>
     </div>
   </div>
</template>

<script>
export default {
    name: 'Stage',
    props: [
        startDate,
        endDate,
        location,
        name,
        link
    ]
}
</script>