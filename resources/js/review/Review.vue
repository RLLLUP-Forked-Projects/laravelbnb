<template>
    <div>
        <div class="form-group">
            <label class="text-muteds" for="">Select the star rating (1 is worst - 5 is best)</label>
            <star-rating :rating="review.rating" class="fa-3x" v-on:rating:changed="review.rating = $event"></star-rating>
        </div>
        <div class="form-group">
            <label for="content" class="text-muteds">Describe your experience with</label>
            <textarea name="content" id="" cols="30" rows="10" class="form-control"></textarea>
        </div>
        <button class="btn btn-primary btn-block">submit</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            review: {
                rating: 5,
                content: null,
            },
        }
    },
}
</script>