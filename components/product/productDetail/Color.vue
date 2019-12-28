<template>
	<div>
		<div class="flex justify-around my-8 ">
			<div
				v-for="lvl in guaranties"
				:key="lvl.id"
				class="flex items-center justify-between w-40 h-12  border
                    border-gray-800 rounded hover:border-2"
			>
				<template v-for="item in lvl.presets">
					<input
						:id="`radio-${item.value.value}`"
						:key="item.id"
						v-model="selectedGuaranty"
						:value="{
							value: item.value.value,
							id: lvl.id,
							price: lvl.price,
							quantity: lvl.quantity,
						}"
						type="radio"
						name="selectedGuaranty"
						class="hidden"
					/>
					<label
						:key="item.value.id"
						:for="`radio-${item.value.value}`"
						class="flex pr-4 items-center cursor-pointer "
					>
						{{ item.value.value }}
						<span
							class="w-4 h-4 mr-3 inline-block rounded-full border border-gray-500"
						/>
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
