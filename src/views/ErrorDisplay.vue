<template>
      <div class="card bg-dark text-white mb-3">
        <img src="../assets/Dumbledore.gif" class="card-img-top" alt="Dumbledore">
        <div class="card-body">
          <h5 class="card-title">Yeah...something broke:</h5>
          <p class="card-text">{{error}}</p>
        </div>
        <div class="card-footer">
            <P>...fix the problems</P>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error']
}
</script>