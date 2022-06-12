<template>
	<section class="py-lg-5 py-4 mt-4" v-if="loading">
		<div class="container">
			<div class="row">
				<loading-card>
					<template #heading>
						<h2></h2>
					</template>
					<template #paragraph>
						<p></p>
					</template>
				</loading-card>
			</div>
			<div class="row justify-content-center mt-4 py-lg-5 py-4">
				<div class="col-md-4 col-12 mb-3 project-info">
					<loading-card>
						<template #paragraph>
							<p></p>
						</template>
					</loading-card>
					<div class="line"></div>
					<loading-card>
						<template #paragraph>
							<p></p>
						</template>
					</loading-card>
				</div>
				<div class="col-md-4 col-12 mb-3 project-info">
					<loading-card>
						<template #paragraph>
							<p></p>
						</template>
					</loading-card>
					<div class="line"></div>
					<loading-card>
						<template #paragraph>
							<p></p>
						</template>
					</loading-card>
				</div>
				<div class="col-md-4 col-12 mb-3 project-info">
					<loading-card>
						<template #paragraph>
							<p></p>
						</template>
					</loading-card>
					<div class="line"></div>
					<loading-card>
						<template #paragraph>
							<p></p>
						</template>
					</loading-card>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
	interface Props {
		loading: Boolean
	}
	
	defineProps<Props>()
</script>

<style scoped>
.col-md-4 p {
    max-width: 30%;
    margin: 0;
}
@media (max-width: 600px) {
    .col-md-4 p {
        max-width: 50%;
    }
}
</style>