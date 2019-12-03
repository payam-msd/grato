<template>
	<div>
		<div class="flex justify-around my-8 ">
			<div
				class="flex items-center justify-between w-40 h-12  border
                    border-gray-800 rounded hover:border-2"
				v-for="lvl in guaranties"
				:key="lvl.id"
			>
				<template v-for="item in lvl.presets">
					<input
						type="radio"
						:key="item.id"
						name="selectedGuaranty"
						:id="`radio-${item.value.value}`"
						class="hidden"
						:value="{
							value: item.value.value,
							id: lvl.id,
							price: lvl.price,
							quantity: lvl.quantity,
						}"
						v-model="selectedGuaranty"
					/>
					<label
						:key="item.value.id"
						class="flex pr-4 items-center cursor-pointer "
						:for="`radio-${item.value.value}`"
					>
						{{ item.value.value }}
						<span
							class="w-4 h-4 mr-3 inline-block rounded-full border border-gray-500"
						></span>
					</label>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		colors: {
			type: Array,
			default: () => {},
		},
	},
}
</script>

<style scoped></style>
