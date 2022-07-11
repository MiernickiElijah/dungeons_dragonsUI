<template>
  <div class="container">
    <div class="card bg-dark text-white mb-3">
      <img src="../assets/Dumbledore.gif" class="card-img-top" alt="Dumbledore">
      <div class="card-body">
        <h5 class="card-title">Oops!...something broke:</h5>
        <p class="card-text">{{ error ? error : "404 not found" }}</p>
      </div>
      <div class="card-footer">
        <P>...we will get it fixed</P>
        <router-link to="/">
          <button class="btn btn-primary">Go Home</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>