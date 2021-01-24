<!-- propsのみのため関数型コンポーネントにする。-->
<template functional>
    <div class="card w-100">
        <div class="card-body">
            <router-link :to="{ name: 'bookable', params: { id: props.id } }">
            <h5 class="card-title">{{ props.title }}</h5>
            </router-link>
            <p class="card-text">{{ props.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        id: Number
    },
}
</script>

