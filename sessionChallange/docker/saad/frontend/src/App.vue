<template>
	<div class="container">
		<h1>Backend Response</h1>

		<div class="response-container">
			<div class="status">Status: {{ status }}</div>

			<div class="json-viewer">
				<pre>{{ prettyJson }}</pre>
			</div>

			<button @click="fetchData" :disabled="loading">
				{{ loading ? 'Loading...' : 'Refresh Data' }}
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue'

	export default defineComponent({
		name: 'App',
		setup() {
			const backendData = ref<any>(null)
			const status = ref<string>('Idle')
			const loading = ref<boolean>(false)

			const prettyJson = computed(() => {
				return backendData.value ? JSON.stringify(backendData.value, null, 2) : 'No data'
			})

			const fetchData = async () => {
				loading.value = true
				status.value = 'Fetching...'

				try {
					const response = await fetch('http://localhost:5000')
					backendData.value = await response.json()
					status.value = 'Success'
				} catch (error) {
					console.error('Error fetching data:', error)
					status.value = 'Error'
					backendData.value = { error: 'Failed to fetch data' }
				} finally {
					loading.value = false
				}
			}

			// Fetch data on component mount
			fetchData()

			return {
				backendData,
				status,
				loading,
				prettyJson,
				fetchData,
			}
		},
	})
</script>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		font-family: Arial, sans-serif;
	}

	h1 {
		color: #2c3e50;
		text-align: center;
	}

	.response-container {
		margin-top: 20px;
	}

	.status {
		margin-bottom: 10px;
		padding: 10px;
		background-color: #f8f9fa;
		border-radius: 4px;
	}

	.json-viewer {
		background-color: #f8f9fa;
		padding: 20px;
		border-radius: 4px;
		margin-bottom: 20px;
	}

	pre {
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	button {
		background-color: #42b983;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 4px;
		cursor: pointer;
	}

	button:disabled {
		background-color: #a8d5c2;
		cursor: not-allowed;
	}
</style>
